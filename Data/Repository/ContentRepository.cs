using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class ContentRepository : BaseRepository
    {
        public List<Content> List()
        {
            var result = new List<Content>();
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.CONTENT_SELECT";
                }
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var entity = new Content
                            {
                                Id = int.Parse(reader["ID"].ToString()),
                                Text= reader["TEXT"].ToString(),
                                Title = reader["TITLE"].ToString()
                            };
                            result.Add(entity);
                        }
                    }
                }
            }

            return result;
        }

        public void Upsert(Content content)
        {
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.CONTENT_UPSERT";
                    cmd.Parameters.AddWithValue("@ID", content.Id);                    
                    cmd.Parameters.AddWithValue("@TEXT", content.Text);
                    cmd.Parameters.AddWithValue("@TITLE", content.Title);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
