import React, {memo} from 'react';

const ArroyoMap = memo(() =>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770.879914823373!2d-3.2041991707438973!3d39.38974789871861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69aeee15a10969%3A0xd03ee8f7e870972!2sC%C3%A1rnicas%20Arroyo!5e0!3m2!1ses!2ses!4v1572721457838!5m2!1ses!2ses"
    width="600" height="450" frameBorder="0" style="border:0;" allowFullScreen="" />,
);

ArroyoMap.displayName = 'ArroyoMap';

export default ArroyoMap;
