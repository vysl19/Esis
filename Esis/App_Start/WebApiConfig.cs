﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Esis
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();


            config.Routes.MapHttpRoute(
    name: "DefaultApi2",
    routeTemplate: "api/SubMenu/Delete",
    defaults: new { action = "Delete", controller = "SubMenu" }
);
            config.Routes.MapHttpRoute(
name: "DefaultApi21",
routeTemplate: "api/SubMenu/Post",
defaults: new { action = "Post", controller = "SubMenu" }
);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi2",
            //    routeTemplate: "api/{controller}/{action}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);



            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
        }
    }
}
