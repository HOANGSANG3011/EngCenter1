import { Link, useNavigate } from 'react-router';
import { BookOpen, Star, ShoppingBag, Bell, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  isLoggedIn?: boolean;
  isAdmin?: boolean;
}

export default function Header({ isLoggedIn = false, isAdmin = false }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-indigo-600">EngCenter</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
              Trang Chủ
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600 transition">
              Khóa Học
            </Link>
            <Link to="/course-search" className="text-gray-700 hover:text-indigo-600 transition">
              Tìm Kiếm
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-gray-700 hover:text-indigo-600 transition">
                Quản Trị
              </Link>
            )}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => navigate('/notifications')}
                  className="relative p-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 p-2 text-gray-700 hover:text-indigo-600 transition">
                      <User className="w-5 h-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="w-4 h-4 mr-2" />
                      Hồ Sơ
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/my-courses')}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Khóa Học Của Tôi
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/login')}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Đăng Xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => navigate('/login')}
                  className="text-gray-700"
                >
                  Đăng Nhập
                </Button>
                <Button onClick={() => navigate('/signup')} className="bg-indigo-600 hover:bg-indigo-700">
                  Đăng Ký Ngay
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
