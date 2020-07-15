using Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class MenuRepository : BaseRepository
    {
        public MenuRepository() : base()
        {

        }
        /// <summary>
        /// Menu bilgisi listler
        /// </summary>
        /// <returns></returns>
        public List<Menu> List()
        {
            var result = new List<Menu>();
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.MENU_SELECT";
                }
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var entity = new Menu
                            {
                                Id = int.Parse(reader["ID"].ToString()),
                                Language= reader["LANGUAGE"].ToString(),
                                Title = reader["TITLE"].ToString()
                            };
                            result.Add(entity);
                        }
                    }
                }
            }

            return result;
        }
    }
}
