import React, { useState } from 'react';
import Title from '../Title';
import './tempreature.css';
import Button from '../Button';

export default function Tempreature() {
  const [degre, setDegre] = useState(0);

  function increaseDegre() {
    setDegre(c => c + 1); // زيادة القيمة بمقدار 1
  }

  function decreaseDegre() {
    setDegre(c => c - 1); // تقليل القيمة بمقدار 1
  }

  return (
    <div className='container text-center'> {/* تحديد تنسيق العنصر */}
      <Title text={"Tempreature"} className={"mt-5 mb-5"} /> {/* عرض العنوان */}
      <div className="card bg-light m-auto" style={{ width: 300 }}>
      <h1 className={`degre ${degre > 0 ? "bg-danger" : "bg-info"}`}>{degre}°C</h1> {/* عرض قيمة الدرجة */}    
      <div className='d-flex mx-auto gap-3 mt-5'>
          <Button text='-' btnClass={"btn-lg"} onClick={decreaseDegre} /> {/* زر لتقليل الدرجة */}
          <Button text='+' btnClass={"btn-lg"} onClick={increaseDegre} /> {/* زر لزيادة الدرجة */}
        </div>
      </div>
    </div>
  );
}
