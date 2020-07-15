using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class StringRepository : BaseRepository
    {         
        public List<SM> List()
        {
            var result = new List<SM>();
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.STRING_SELECT";
                }
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var entity = new SM
                            {                                
                                Language = reader["LANGUAGE"].ToString(),
                                Title = reader["TITLE"].ToString(),
                                Text = reader["TEXT"].ToString(),
                            };
                            result.Add(entity);
                        }
                    }
                }
            }

            return result;
        }

        public void Upsert(SM sm)
        {
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.STRING_UPSERT";                    
                    cmd.Parameters.AddWithValue("@LANGUAGE", sm.Language);
                    cmd.Parameters.AddWithValue("@TEXT", sm.Text);
                    cmd.Parameters.AddWithValue("@TITLE", sm.Title);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
