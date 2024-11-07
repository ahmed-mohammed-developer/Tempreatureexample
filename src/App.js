import './App.css'; // استيراد ملفات CSS للتنسيق
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap
import Tempreature from './component/Tempreature/Tempreature';
function App() {
  return (
    <div className="App">
      <Tempreature />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
