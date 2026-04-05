import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BookOpen, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-indigo-600">EngCenter</span>
        </Link>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-indigo-600" />
                </div>
                <h1 className="text-2xl md:text-3xl mb-2">Quên Mật Khẩu?</h1>
                <p className="text-gray-600">
                  Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn khôi phục mật khẩu
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                  Gửi Hướng Dẫn
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Quay lại đăng nhập
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl mb-2">Kiểm Tra Email</h1>
              <p className="text-gray-600 mb-6">
                Chúng tôi đã gửi hướng dẫn khôi phục mật khẩu đến{' '}
                <span className="font-semibold text-gray-900">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Vui lòng kiểm tra hộp thư đến (và cả thư rác) để tìm email từ chúng tôi
              </p>
              <Button
                onClick={() => navigate('/login')}
                className="bg-indigo-600 hover:bg-indigo-700"
                size="lg"
              >
                Quay Về Đăng Nhập
              </Button>
              <div className="mt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Chưa nhận được email? Gửi lại
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
