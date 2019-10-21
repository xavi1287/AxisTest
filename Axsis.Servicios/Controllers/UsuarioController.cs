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
    public class UsuarioController : ApiController
    {

        // GET: api/Usuario
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

        // POST: api/Usuario
        public IHttpActionResult Post(Usuario usuario)
        {
            #region Implementacion

            try
            {
                usuario.FechaCreacion=DateTime.Now;
                usuario.FechaModificacion=DateTime.Now;
                LoginResponse result= new LoginResponse(); 
                var usuarios = Logica.Logica.InsertarUsuario(usuario);
                if (usuarios != 0)
                {
                    return Ok(result.MensajeRespuesta = "Guardado con exito!");
                }
                else
                {
                    return ResponseMessage(new HttpResponseMessage { StatusCode = HttpStatusCode.Conflict });
                }

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
