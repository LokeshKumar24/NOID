sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("noid.controller.View1", {
			onInit: function () {

				this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel(),"emp");
				this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel(),"employees");

			},
			empArray:[],
			onSubmit:function(){
				debugger
				var name= this.getOwnerComponent().getModel("emp").getProperty("/name");
				var age= this.getOwnerComponent().getModel("emp").getProperty("/age");
				var dob= this.getOwnerComponent().getModel("emp").getProperty("/dob");

				var jObject={
					name:name,
					age:age,
					dob:dob
				}
				this.empArray.push(jObject)

				this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel({empList:this.empArray}),"employees");
				this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel(),"emp");
			}

		});
	});
