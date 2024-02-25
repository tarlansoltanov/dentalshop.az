const WhatsappOrder = () => {
  return (
    <div>
      <a
        id="whatsapp-order"
        href="https://api.whatsapp.com/send/?phone=994505115141&text=Salam&type=phone_number&app_absent=0"
        target="_blank"
        className="right">
        <span className="fab fa-whatsapp" aria-hidden="true"></span>
        Whatsapp
      </a>
    </div>
  );
};

export default WhatsappOrder;
