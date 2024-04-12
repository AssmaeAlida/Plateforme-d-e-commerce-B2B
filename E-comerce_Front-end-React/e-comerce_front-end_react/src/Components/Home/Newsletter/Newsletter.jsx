import 'typeface-inter';
import './Newsletter.css';

export default function Pagination() {
  return (
    <div style={{ width: 1372, height: 314, left: 34, top: 2597, position: 'absolute' }}>
      <div style={{ width: 1372, height: 314, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', borderRadius: 40, border: '1px #D9D9D9 solid' }} />
      <div style={{ width: 529, height: 237, left: 422, top: 39, position: 'absolute' }}>
        <div style={{ width: 529, height: 54, left: 0, top: 183, position: 'absolute' }}>
          <div style={{ width: 529, height: 54, left: 0, top: 0, position: 'absolute', background: '#FF5722', borderRadius: 40 }} />
          <div style={{ left: 222, top: 18, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Subscribe!</div>
        </div>
        <div style={{ left: 0, top: 58, position: 'absolute', color: '#616161', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 18.69, wordWrap: 'break-word' }}>Please subscribe at our Newsletter to get info with every new arrivals!</div>
        <div style={{ left: 78, top: 0, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', lineHeight: 42.05, wordWrap: 'break-word' }}>YourStore Newsletter</div>
        <div style={{ width: 529, height: 54, left: 0, top: 113, position: 'absolute' }}>
          <input type="email" placeholder="Email adress..." style={{ width: '100%', height: '100%', borderRadius: 40, border: '1px #C1C1C1 solid', padding: '0 20px', boxSizing: 'border-box' }} />
          <button style={{ width: 20, height: 20, left: 486, top: 17, position: 'absolute', background: '#878787', border: 'none', borderRadius: '50%', cursor: 'pointer' }}></button>
        </div>
      </div>
    </div>
  );
}
