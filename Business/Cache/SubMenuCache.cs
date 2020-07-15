using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Cache
{
    public class SubMenuCache : DbCachedDictionary<string, List<SubMenu>>
    {
        private static readonly object padlock = new object();
        private static SubMenuCache instance = null;

        public static SubMenuCache GetInstance()
        {
            lock (padlock)
            {
                if (instance == null)
                {
                    instance = new SubMenuCache();
                }
                return instance;
            }
        }
        private SubMenuCache() : base("dbo.SUB_MENU_SELECT")
        {

        }
        public override void Populate(SqlDataReader reader)
        {
            var menuTitle = reader["TITLE"].ToString();
            var language = reader["LANGUAGE"].ToString();
            var entity = new SubMenu()
            {
                Description = reader["DESCRIPTION"].ToString(),
                Title = reader["SUB_MENU_TITLE"].ToString(),
                Html = reader["HTML"].ToString(),
                Id= int.Parse(reader["ID"].ToString()),
                MenuId = int.Parse(reader["MENU_ID"].ToString()),
                Image = reader["IMAGE"].ToString(),              
            };

            if (!dict.ContainsKey(menuTitle + "-" + language))
            {
                dict.Add(menuTitle + "-" + language, new List<SubMenu>() { entity });
            }
            else
            {
                dict[menuTitle + "-" + language].Add(entity);
            }
        }
    }
}
