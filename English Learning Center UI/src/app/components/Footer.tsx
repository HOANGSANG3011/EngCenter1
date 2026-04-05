import { Link } from 'react-router';
import { BookOpen, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">EngCenter</span>
            </div>
            <p className="text-sm mb-4">
              Trung tâm tiếng Anh hàng đầu với đội ngũ giảng viên quốc tế chuyên nghiệp.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Khóa Học</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-indigo-400 transition">Tiếng Anh Giao Tiếp</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-400 transition">IELTS</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-400 transition">TOEIC</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-400 transition">Tiếng Anh Thiếu Nhi</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition">Về Chúng Tôi</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition">Câu Hỏi Thường Gặp</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition">Chính Sách</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition">Điều Khoản</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@engcenter.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 EngCenter. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
