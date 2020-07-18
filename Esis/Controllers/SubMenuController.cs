using Business.Cache;
using Business.Helper;
using Data.Enity;
using Data.Repository;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Esis.Controllers
{
    public class SubMenuController : BaseController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/SubMenu
        [HttpGet]
        public Dictionary<string, List<SubMenu>> List()
        {
            try
            {
                return SubMenuCache.GetInstance().GeValues();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new Dictionary<string, List<SubMenu>>();

        }

        // GET: api/SubMenu/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SubMenu
        [HttpPost]
        public void Post([FromBody] SubMenu subMenu)
        {
            try
            {
                ValidateLogin(subMenu);
                var subMenuRepository = new SubMenuRepository();
                if (subMenu.Image.IndexOf(Constants.Base64String) >= 0)
                {
                    byte[] content = Convert.FromBase64String(subMenu.Image.Replace(Constants.Base64String, string.Empty));
                    var guid = Guid.NewGuid().ToString("N");
                    var path = "/Images/" + guid + ".jpeg";
                    if (System.Diagnostics.Debugger.IsAttached)
                    {
                        path = "~/Images/" + guid + ".jpeg"; ;
                    }

                    var fullPath = System.Web.HttpContext.Current.Server.MapPath(path);
                    System.IO.File.WriteAllBytes(fullPath, content);
                    subMenu.Image = path;
                }
                subMenuRepository.Upsert(subMenu);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }

        }

        // PUT: api/SubMenu/5
        public void Put(int id, [FromBody] string value)
        {
        }

        
        [HttpPost]       
        public void Delete([FromBody] SubMenu subMenu)
        {
            try
            {
                ValidateLogin(subMenu);
                var subMenuRepository = new SubMenuRepository();
                subMenuRepository.Delete(subMenu.Id);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
        }
    }
}
