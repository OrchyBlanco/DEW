$(".print").button({
    icon: {
        icon: "ui-icon-print"
    },
    text: true
});

$("#printAll").click(function() {
    $("#wrap").printArea({
      mode: "popup",
      extraCss:"hofmann.css"
    });
});

$("#printSide").click(function() {
    $("#side").printArea({
      mode: "popup",
      extraCss:"hofmann.css"
    });
});
