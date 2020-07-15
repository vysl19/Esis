using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Enity
{
    public class SubMenu
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// MenuId
        /// </summary>
        public int MenuId {get; set; }

        /// <summary>
        /// Html
        /// </summary>
        public string Html { get; set; }

        /// <summary>
        /// Title
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Description
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Image
        /// </summary>
        public string Image { get; set; }
    }
}
