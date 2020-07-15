using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class ContactRepository:BaseRepository
    {
        public List<Contact> List()
        {
            var result = new List<Contact>();
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.CONTACT_SELECT";
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new Contact
                                {
                                    Id = int.Parse(reader["ID"].ToString()),
                                    Mail = reader["MAIL"].ToString(),
                                    Address = reader["ADDRESS"].ToString(),
                                    Fax = reader["FAX"].ToString(),
                                    Location = reader["LOCATION"].ToString(),
                                    Telephone = reader["TELEPHONE"].ToString(),
                                    Title = reader["TITLE"].ToString(),
                                };
                                result.Add(entity);
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                conn.Close();
                throw e;
            }


            return result;
        }

        public void Update(Contact contact)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.CONTACT_UPDATE";
                        cmd.Parameters.AddWithValue("@ID", contact.Id);
                        cmd.Parameters.AddWithValue("@MAIL", contact.Mail);
                        cmd.Parameters.AddWithValue("@TELEPHONE", contact.Telephone);
                        cmd.Parameters.AddWithValue("@FAX", contact.Fax);
                        cmd.Parameters.AddWithValue("@ADDRESS", contact.Address);
                        cmd.Parameters.AddWithValue("@LOCATION", contact.Location);
                        cmd.Parameters.AddWithValue("@TITLE", contact.Title);                        

                        cmd.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception e)
            {
                conn.Close();
                throw e;
            }
        }
    }
}
