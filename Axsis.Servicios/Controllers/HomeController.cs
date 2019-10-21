
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using Axsis.Servicios.Models;


namespace Axsis.Servicios.Controllers
{
    [System.Web.Mvc.RoutePrefix("api/autenticacion")]

    public class HomeController : Controller
    {
        [System.Web.Mvc.HttpPost]
        public IHttpActionResult Login(LoginRequest loginRequest)
        {
            try
            {
                if (loginRequest==null) throw new HttpResponseException(HttpStatusCode.BadRequest);
                LoginResponse result= new LoginResponse();
                var usuarioLogin =
                    Logica.Logica.ObtenerUsuarioPorUsuarioContrasena(loginRequest.UserName, loginRequest.Contrasena);
                if (usuarioLogin!=null)
                {
                    result.Usuario = usuarioLogin;
                }
                else
                {
                    result.MensajeRespuesta = HttpStatusCode.Unauthorized.ToString();


                }

                return Ok(result);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
        }
    }
}
