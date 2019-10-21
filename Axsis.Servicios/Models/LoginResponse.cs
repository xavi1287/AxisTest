using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Axsis.Entity;
using Newtonsoft.Json;

namespace Axsis.Servicios.Models
{
    public class LoginResponse
    {
        [JsonProperty("mensajeRespuesta")]
        public string MensajeRespuesta { get; set; }
        [JsonProperty("usuario")]
        public Usuario Usuario { get; set; }
    }
}