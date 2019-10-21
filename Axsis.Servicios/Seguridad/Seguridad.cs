using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Axsis.Servicios.Seguridad
{
    public class Seguridad
    {
        public static string Encriptar(string contrasena)
        {
            try
            {
                byte[] encriptado = System.Text.Encoding.Unicode.GetBytes(contrasena);
                return Convert.ToBase64String(encriptado);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static string Desencriptar(string contrasena)
        {
            byte[] descencriptar = Convert.FromBase64String(contrasena);
            return System.Text.Encoding.Unicode.GetString(descencriptar);
        }
    }
}