const validateFields = (form, fieldsArray) => {
  fieldsArray.forEach(field => {
    field.removeClass("input-error");
    if(field.val().trim() == "") {
      field.addClass("input-error");
    }
  });

  const errorFields = form.find(".input-error");

  return errorFields.length == 0;
}


$(".form").on("submit", e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const isValid = validateFields(form, [name, phone, comment, to]);
    
    if (isValid) {
      $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
          name: name.val(),
          phone: phone.val(),
          comment: comment.val(),
          to: to.val(),
        },
        success: data => {
          if(data.status === 1) {
            modal2("Форма отправлена успешна.")
          }
        },
        error: data => {
          if(data.status === 0) {
            modal2("Ошибка! Повторите запрос.")
          }
        },
      });
    }
});


 function modal2(content)   {
  const body = document.body;
    const overlayElement = document.createElement("div");
    overlayElement.classList.add('overlay');
  
    overlayElement.addEventListener("click", e => {
  
      if (!e.target.classList.contains("modal-content")) {
        closeElement.click();
      }
    });
    
    const containerElement = document.createElement('div');
    containerElement.classList.add('modal-container');
  
    const contentElement = document.createElement('div');
    
  
    const closeButton = document.createElement('a');
    closeButton.classList.add("btn2");
    closeButton.classList.add("app-submit-btn")
    closeButton.textContent = "ЗАКРЫТЬ";
    closeButton.href = "#";
  
  
    contentElement.innerHTML = content;

    if(contentElement.innerHTML === "Форма отправлена успешна.") {
      contentElement.classList.add('modal-content');
    } else {
      contentElement.classList.add('modal-content-error');
    }
  
    const closeElement = document.createElement('a');
    closeElement.classList.add('modal-close');
    closeElement.textContent = 'x';
    closeElement.href = '#';
  
    closeElement.addEventListener("click", e => {
      e.preventDefault();
      body.removeChild(overlayElement);
  
    });
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    
  
    containerElement.appendChild(contentElement);
    containerElement.appendChild(closeButton);
  
    body.appendChild(overlayElement);

    $(".app-submit-btn").click( e => {
      e.preventDefault();
      body.removeChild(overlayElement);
    });
}








