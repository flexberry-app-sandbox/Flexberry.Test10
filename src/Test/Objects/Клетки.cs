﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клетки.
    /// </summary>
    // *** Start programmer edit section *** (Клетки CustomAttributes)

    // *** End programmer edit section *** (Клетки CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлеткиE", new string[] {
            "НомерКлетки as \'Номер клетки\'",
            "ТипКлетки as \'Тип клетки\'",
            "ПлощатьКлетки as \'Площать клетки\'"})]
    [View("КлеткиL", new string[] {
            "НомерКлетки as \'Номер клетки\'",
            "ТипКлетки as \'Тип клетки\'",
            "ПлощатьКлетки as \'Площать клетки\'"})]
    public class Клетки : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКлетки;
        
        private string fТипКлетки;
        
        private int fПлощатьКлетки;
        
        // *** Start programmer edit section *** (Клетки CustomMembers)

        // *** End programmer edit section *** (Клетки CustomMembers)

        
        /// <summary>
        /// НомерКлетки.
        /// </summary>
        // *** Start programmer edit section *** (Клетки.НомерКлетки CustomAttributes)

        // *** End programmer edit section *** (Клетки.НомерКлетки CustomAttributes)
        public virtual int НомерКлетки
        {
            get
            {
                // *** Start programmer edit section *** (Клетки.НомерКлетки Get start)

                // *** End programmer edit section *** (Клетки.НомерКлетки Get start)
                int result = this.fНомерКлетки;
                // *** Start programmer edit section *** (Клетки.НомерКлетки Get end)

                // *** End programmer edit section *** (Клетки.НомерКлетки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клетки.НомерКлетки Set start)

                // *** End programmer edit section *** (Клетки.НомерКлетки Set start)
                this.fНомерКлетки = value;
                // *** Start programmer edit section *** (Клетки.НомерКлетки Set end)

                // *** End programmer edit section *** (Клетки.НомерКлетки Set end)
            }
        }
        
        /// <summary>
        /// ПлощатьКлетки.
        /// </summary>
        // *** Start programmer edit section *** (Клетки.ПлощатьКлетки CustomAttributes)

        // *** End programmer edit section *** (Клетки.ПлощатьКлетки CustomAttributes)
        public virtual int ПлощатьКлетки
        {
            get
            {
                // *** Start programmer edit section *** (Клетки.ПлощатьКлетки Get start)

                // *** End programmer edit section *** (Клетки.ПлощатьКлетки Get start)
                int result = this.fПлощатьКлетки;
                // *** Start programmer edit section *** (Клетки.ПлощатьКлетки Get end)

                // *** End programmer edit section *** (Клетки.ПлощатьКлетки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клетки.ПлощатьКлетки Set start)

                // *** End programmer edit section *** (Клетки.ПлощатьКлетки Set start)
                this.fПлощатьКлетки = value;
                // *** Start programmer edit section *** (Клетки.ПлощатьКлетки Set end)

                // *** End programmer edit section *** (Клетки.ПлощатьКлетки Set end)
            }
        }
        
        /// <summary>
        /// ТипКлетки.
        /// </summary>
        // *** Start programmer edit section *** (Клетки.ТипКлетки CustomAttributes)

        // *** End programmer edit section *** (Клетки.ТипКлетки CustomAttributes)
        [StrLen(255)]
        public virtual string ТипКлетки
        {
            get
            {
                // *** Start programmer edit section *** (Клетки.ТипКлетки Get start)

                // *** End programmer edit section *** (Клетки.ТипКлетки Get start)
                string result = this.fТипКлетки;
                // *** Start programmer edit section *** (Клетки.ТипКлетки Get end)

                // *** End programmer edit section *** (Клетки.ТипКлетки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клетки.ТипКлетки Set start)

                // *** End programmer edit section *** (Клетки.ТипКлетки Set start)
                this.fТипКлетки = value;
                // *** Start programmer edit section *** (Клетки.ТипКлетки Set end)

                // *** End programmer edit section *** (Клетки.ТипКлетки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлеткиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлеткиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлеткиE", typeof(IIS.Test.Клетки));
                }
            }
            
            /// <summary>
            /// "КлеткиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлеткиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлеткиL", typeof(IIS.Test.Клетки));
                }
            }
        }
    }
}
