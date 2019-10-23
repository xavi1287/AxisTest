using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Axsis.Entity;
using Axsis.Servicios.Models;


namespace Axsis.Servicios.Controllers
{
    [RoutePrefix("api/usuario")]
    [AllowAnonymous]

    public class UsuarioController : ApiController
    {
        [HttpGet()]
        [Route("obtenerSexo")]
        public IHttpActionResult ObtenerSexo()
        {
            #region Implementacion

            try
            {
                var sexo = Logica.Logica.ObtenerSexoTodos();
                if (sexo.Any())
                {
                    return Ok(sexo);
                }
                else
                {
                    return ResponseMessage(new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound });
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            #endregion Implementacion
        }

        // GET: api/Usuario
        [HttpGet()]
        [Route("obtenerusuarios")]
        public IHttpActionResult ObtenerUsuarios()
        {
            #region Implementacion

            try
            {
                var usuarios = Logica.Logica.ObtenerUsuarioTodos();
                if (usuarios.Any())
                {
                    return Ok(usuarios);
                }
                else
                {
                    return ResponseMessage(new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound });
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            #endregion Implementacion
        }

        // GET: api/Usuario/5
        [HttpGet()]
        [Route("obtenerUsuario")]
        public IHttpActionResult ObtenerUsuarioId(long id)
        {
            #region Implementacion

            try
            {
                var usuarios = Logica.Logica.ObtenerUsuarioPorId(id);
                if (usuarios!=null)
                {
                    return Ok(usuarios);
                }
                else
                {
                    return ResponseMessage(new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound });
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            #endregion Implementacion
        }

        [HttpGet()]
        [Route("obtenerUsuarioCorreo")]
        public IHttpActionResult ObtenerUsuarioCorreoUsuario(Usuario usuario)
        {
            #region Implementacion

            try
            {
                var usuarios = Logica.Logica.ObtenerUsuarioPorCorreoUsuario(usuario.Email,usuario.Login);
                if (usuarios != null)
                {
                    return Ok(usuarios);
                }
                else
                {
                    return ResponseMessage(new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound });
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            #endregion Implementacion
        }

        [HttpPost]
        // POST: api/Usuario
        public IHttpActionResult Post(Usuario usuario)
        {
            #region Implementacion

            try
            {
                usuario.FechaCreacion=DateTime.Now;
                usuario.FechaModificacion=DateTime.Now;
                LoginResponse result= new LoginResponse();
                var busquedausuario = Logica.Logica.ObtenerUsuarioPorCorreoUsuario(usuario.Email, usuario.Login);
                if (busquedausuario==null)
                {
                    var usuarios = Logica.Logica.InsertarUsuario(usuario);
                    if (usuarios != 0)
                    {
                        result.Codigo = usuarios;
                        result.MensajeRespuesta = "Guardado con exito!";
                        return Ok(result);
                    }
                    else
                    {
                        return ResponseMessage(new HttpResponseMessage { StatusCode = HttpStatusCode.Conflict });
                    }
                }
                else
                {
                    result.Codigo = -1;
                    result.MensajeRespuesta = "Ya existe un usuario con el mismo email y login!";
                    return Ok(result);
                }
                

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            #endregion Implementacion
        }

        // POST: api/Usuario
        [HttpPost]
        [Route("actualizar")]
        public IHttpActionResult Actualizar(Usuario usuario)
        {
            #region Implementacion

            try
            {                
                usuario.FechaModificacion = DateTime.Now;
                LoginResponse result = new LoginResponse();
                Logica.Logica.ActualizarUsuario(usuario);
                result.Codigo='0';
                result.MensajeRespuesta = "Actualizado con exito!"
                return Ok(result);               
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            #endregion Implementacion
        }

        // PUT: api/Usuario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Usuario/5
        public void Delete(int id)
        {
        }
    }
}
