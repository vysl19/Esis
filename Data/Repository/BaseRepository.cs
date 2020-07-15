using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class BaseRepository
    {
        /// <summary>
        /// ConnectionString
        /// </summary>
        public string ConnectionString { get; set; }

        /// <summary>
        /// SqlConnection
        /// </summary>
        public SqlConnection conn { get; set; }

        public SqlCommand cmd { get; set; }

        public BaseRepository()
        {
            SetConnection();
        }
        public void SetConnection()
        {
            ConnectionString = ConfigurationManager.ConnectionStrings["constr"].ConnectionString;
            conn = new SqlConnection();
            cmd = new SqlCommand();
            conn.ConnectionString = ConnectionString;
            cmd.Connection = conn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
        }
    }
}
