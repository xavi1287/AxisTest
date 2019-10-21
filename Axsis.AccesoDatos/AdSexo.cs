using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Axsis.Entity;

namespace Axsis.AccesoDatos
{
    [Serializable]
    public class AdSexo
    {
        #region Obtener

        public static List<Sexo> ObtenerSexoTodos()
        {
            using (var ctx = new AxsisEntities())
            {
                var lstUsuario = ctx.Sexo.ToList();
                ctx.Dispose();
                return lstUsuario;
            }
        }

        #endregion Obtener
    }
}
