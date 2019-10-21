using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using Axsis.AccesoDatos;
using Axsis.Entity;

namespace Axsis.Logica
{
    public class Logica
    {
        #region Usuario

        #region Obtener

        public static List<Usuario> ObtenerUsuarioTodos()
        {
            try
            {
                return AdUsuario.ObtenerUsuarioTodos();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static Usuario ObtenerUsuarioPorId(long usuarioId)
        {
            try
            {
                return AdUsuario.ObtenerUsuarioPorId(usuarioId);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static Usuario ObtenerUsuarioPorUsuarioContrasena(string login, string contrasena)
        {
            try
            {
                return AdUsuario.ObtenerUsuarioPorUsuarioContrasena(login, contrasena);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static Usuario ObtenerUsuarioPorCorreoUsuario(string email, string usuario)
        {
            try
            {
                return AdUsuario.ObtenerUsuarioPorCorreoUsuario(email, usuario);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        #endregion Obtener

        #region Insertar

        public static long InsertarUsuario(Usuario entUsuario)
        {
            using (var ts = new TransactionScope(TransactionScopeOption.Required))
            {
                try
                {
                    var usuarioId = AdUsuario.InsertarUsuario(entUsuario);
                    ts.Complete();
                    return usuarioId;
                }
                catch (Exception e)
                {
                    ts.Dispose();
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

        #endregion Insertar

        #region Actualizar

        public static void ActualizarUsuario(Usuario entUsuario)
        {
            using (var ts = new TransactionScope(TransactionScopeOption.Required))
            {
                try
                {
                    AdUsuario.ActualizarUsuario(entUsuario);
                    ts.Complete();
                }
                catch (Exception e)
                {
                    ts.Dispose();
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

        #endregion Actualizar

        #endregion Usuario

        #region Sexo

        #region Obtener

        public static List<Sexo> ObtenerSexoTodos()
        {
            try
            {
                return AdSexo.ObtenerSexoTodos();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        #endregion Obtener

        #endregion Sexo
    }
}
