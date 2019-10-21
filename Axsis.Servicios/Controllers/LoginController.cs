using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Axsis.Servicios.Models;


namespace Axsis.Servicios.Controllers
{
    [RoutePrefix("api/autenticacion")]
    
    public class LoginController : ApiController
    {
        /// <summary>
        /// Metodo para IniciarSesion
        /// </summary>
        /// <param name="loginRequest"></param>
        /// <returns></returns>
        [HttpPost]
        public IHttpActionResult Login(LoginRequest loginRequest)
        {
            #region Implementacion

            
            try
            {
                if (loginRequest == null) throw new HttpResponseException(HttpStatusCode.BadRequest);
                LoginResponse result = new LoginResponse();
                var usuarioLogin =
                    Logica.Logica.ObtenerUsuarioPorUsuarioContrasena(loginRequest.UserName, loginRequest.Contrasena);
                if (usuarioLogin != null)
                {
                    result.Usuario = usuarioLogin;
                }
                else
                {
                    return ResponseMessage(new HttpResponseMessage {StatusCode = HttpStatusCode.Unauthorized});
                }

                return Ok(result);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException (HttpStatusCode.BadRequest);
            }

            #endregion Implementacion
        }
    }
}
