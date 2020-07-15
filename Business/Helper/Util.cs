using Data;
using Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Helper
{
    public class Util
    {
        /// <summary>
        /// Create Menu In Tree Format
        /// </summary>
        /// <param name="nodes"></param>
        /// <returns></returns>
        //public static List<ITreeMenu> CreateMenu(List<IMenu> nodes)
        //{
        //    var notAddedIndexes = new List<int>();
        //    var result = new List<ITreeMenu>();
        //    for (int i = 0; i < nodes.Count; i++)
        //    {
        //        if (nodes[i].ParentId == 0)
        //        {
        //            result.Add(new TreeMenu()
        //            {
        //                Item = nodes[i],
        //            });
        //        }
        //        else
        //        {
        //            if (!CreateNode(result, nodes[i]))
        //            {
        //                notAddedIndexes.Add(i);
        //            }
        //        }
        //    }
        //    for (int i = 0; i < notAddedIndexes.Count; i++)
        //    {
        //        CreateNode(result, nodes[notAddedIndexes[i]]);
        //    }
        //    return result;
        //}

        //private static bool CreateNode(List<ITreeMenu> nodes, IMenu parent)
        //{            
        //    foreach (var node in nodes)
        //    {
        //        if (node.Item.Id == parent.ParentId)
        //        {
        //            node.Childreen.Add(new TreeMenu()
        //            {
        //                Item = parent
        //            });
        //            return true;                   
        //        }
        //        else
        //        {
        //            CreateNode(node.Childreen, parent);
        //        }
        //    }
        //    return false;
        //}
    }
}
