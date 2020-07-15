using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
   public class SubMenuRepository:BaseRepository
    {
        public List<SubMenu> List()
        {
            var result = new List<SubMenu>();
            try
            {                
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.SUB_MENU_SELECT";
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new SubMenu
                                {
                                    Id = int.Parse(reader["ID"].ToString()),
                                    Html = reader["HTML"].ToString(),
                                    Description = reader["DESCRIPTION"].ToString(),
                                    Title = reader["TITLE"].ToString(),
                                    MenuId = int.Parse(reader["MENU_ID"].ToString()),
                                };
                                result.Add(entity);
                            }
                        }
                    }
                }
            }
            catch(Exception e)
            {
                conn.Close();
                throw e;
            }
            

            return result;
        }

        public void Upsert(SubMenu subMenu)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.SUB_MENU_UPSERT";
                        cmd.Parameters.AddWithValue("@ID", subMenu.Id);
                        cmd.Parameters.AddWithValue("@MENU_ID", subMenu.MenuId);
                        cmd.Parameters.AddWithValue("@HTML", subMenu.Html);
                        cmd.Parameters.AddWithValue("@TITLE", subMenu.Title);
                        cmd.Parameters.AddWithValue("@DESCRIPTION", subMenu.Description);
                        cmd.Parameters.AddWithValue("@IMAGE", subMenu.Image);

                        cmd.ExecuteNonQuery();
                    }
                }
            }
            catch(Exception e)
            {
                conn.Close();
                throw e;
            }            
        }
        public void Delete(int id)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.SUB_MENU_DELETE";
                        cmd.Parameters.AddWithValue("@ID", id);                  
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
