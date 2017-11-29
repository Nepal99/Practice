

//Menu controller controls the menu.html

myapplication.controller("menuCtrl", function(){

    /**
     * Here we are creating a model.
     * Creating the model, so that we do not need to create the HTML every time.
     * These values can be accessed anywhere.
     */
    
     var menuModel = this;

    menuModel.menuList = [
    {label:"Dashboard", value:"dashboard"},
    {label:"Messages", value:"messages"},
    {label:"Comments", value:"comments"},
    {label:"Settings", value:"settings"},
    {label:"New Menu", value:"Test"},
    ];
    console.log("Menu controller loaded....!");
});