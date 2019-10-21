using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Axsis.Entity;


namespace Axsis.AccesoDatos
{
    [Serializable]
    public class AdUsuario
    {
        #region Obtener

        public static List<Usuario> ObtenerUsuarioTodos()
        {
            using (var ctx = new AxsisEntities())
            {
               var lstUsuario= ctx.Usuario.ToList();
               ctx.Dispose();
               return lstUsuario;
            }
        }

        public static Usuario ObtenerUsuarioPorId(long usuarioId)
        {
            using (var ctx = new AxsisEntities())
            {
                var lstUsuario = ctx.Usuario.FirstOrDefault(u=>u.UsuarioId.Equals(usuarioId));
                ctx.Dispose();
                return lstUsuario;
            }
        }

        public static Usuario ObtenerUsuarioPorUsuarioContrasena(string login, string contrasena)
        {
            using (var ctx = new AxsisEntities())
            {
                var lstUsuario = ctx.Usuario.FirstOrDefault(u => u.Login.Equals(login) && u.Contraseña.Equals(contrasena));
                ctx.Dispose();
                return lstUsuario;
            }
        }

        public static Usuario ObtenerUsuarioPorCorreoUsuario(string email,string usuario)
        {
            using (var ctx = new AxsisEntities())
            {
                var lstUsuario = ctx.Usuario.FirstOrDefault(u => u.Email.Equals(email) && u.Login.Equals(usuario));
                ctx.Dispose();
                return lstUsuario;
            }
        }

        #endregion Obtener

        #region Insertar

        public static long InsertarUsuario(Usuario entUsuario)
        {
            using (var ctx = new  AxsisEntities())
            {
                ctx.Usuario.Add(entUsuario);
                ctx.SaveChanges();
                ctx.Dispose();
                var usuarioId = entUsuario.UsuarioId;
                return usuarioId;
            }
        }

        #endregion Insertar

        #region Actualizar

        public static void ActualizarUsuario(Usuario entUsuario)
        {
            using (var ctx = new AxsisEntities())
            {
                ctx.Usuario.Attach(entUsuario);
                ctx.Entry(entUsuario).State = EntityState.Modified;
                ctx.SaveChanges();
                ctx.Dispose();
            }
        }

        #endregion Actualizar
    }
}
