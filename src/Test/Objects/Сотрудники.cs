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
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "ТабличНомер as \'Таблич номер\'",
            "КодДолжности as \'Код должности\'",
            "Отчество as \'Отчество\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("СотрудникиE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникиL", new string[] {
            "ТабличНомер as \'Таблич номер\'",
            "КодДолжности as \'Код должности\'",
            "Отчество as \'Отчество\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Должность.Наименование as \'Наименование\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fТабличНомер;
        
        private int fКодДолжности;
        
        private string fОтчество;
        
        private string fФамилия;
        
        private string fИмя;
        
        private IIS.Test.Должность fДолжность;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Get start)

                // *** End programmer edit section *** (Сотрудники.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудники.Имя Get end)

                // *** End programmer edit section *** (Сотрудники.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Set start)

                // *** End programmer edit section *** (Сотрудники.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудники.Имя Set end)

                // *** End programmer edit section *** (Сотрудники.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодДолжности.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.КодДолжности CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.КодДолжности CustomAttributes)
        public virtual int КодДолжности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.КодДолжности Get start)

                // *** End programmer edit section *** (Сотрудники.КодДолжности Get start)
                int result = this.fКодДолжности;
                // *** Start programmer edit section *** (Сотрудники.КодДолжности Get end)

                // *** End programmer edit section *** (Сотрудники.КодДолжности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.КодДолжности Set start)

                // *** End programmer edit section *** (Сотрудники.КодДолжности Set start)
                this.fКодДолжности = value;
                // *** Start programmer edit section *** (Сотрудники.КодДолжности Set end)

                // *** End programmer edit section *** (Сотрудники.КодДолжности Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Get start)

                // *** End programmer edit section *** (Сотрудники.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудники.Отчество Get end)

                // *** End programmer edit section *** (Сотрудники.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Set start)

                // *** End programmer edit section *** (Сотрудники.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудники.Отчество Set end)

                // *** End programmer edit section *** (Сотрудники.Отчество Set end)
            }
        }
        
        /// <summary>
        /// ТабличНомер.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ТабличНомер CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ТабличНомер CustomAttributes)
        public virtual int ТабличНомер
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ТабличНомер Get start)

                // *** End programmer edit section *** (Сотрудники.ТабличНомер Get start)
                int result = this.fТабличНомер;
                // *** Start programmer edit section *** (Сотрудники.ТабличНомер Get end)

                // *** End programmer edit section *** (Сотрудники.ТабличНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ТабличНомер Set start)

                // *** End programmer edit section *** (Сотрудники.ТабличНомер Set start)
                this.fТабличНомер = value;
                // *** Start programmer edit section *** (Сотрудники.ТабличНомер Set end)

                // *** End programmer edit section *** (Сотрудники.ТабличНомер Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.Test.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Get start)

                // *** End programmer edit section *** (Сотрудники.Должность Get start)
                IIS.Test.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудники.Должность Get end)

                // *** End programmer edit section *** (Сотрудники.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Set start)

                // *** End programmer edit section *** (Сотрудники.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудники.Должность Set end)

                // *** End programmer edit section *** (Сотрудники.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Test.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Test.Сотрудники));
                }
            }
        }
    }
}
