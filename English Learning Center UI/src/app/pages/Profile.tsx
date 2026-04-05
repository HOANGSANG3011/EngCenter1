import { useNavigate } from 'react-router';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Edit } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Profile() {
  const navigate = useNavigate();

  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0912345678',
    dob: '15/01/1995',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    memberSince: '01/2024',
    totalCourses: 3,
    completedCourses: 1,
    certificates: 1,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl">Hồ Sơ Cá Nhân</h1>
          <Button onClick={() => navigate('/profile/edit')} className="bg-indigo-600 hover:bg-indigo-700">
            <Edit className="w-5 h-5 mr-2" />
            Chỉnh Sửa
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl mb-1">{user.name}</h2>
                <p className="text-gray-600 mb-4">Học viên</p>

                <div className="pt-4 border-t space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{user.phone}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{user.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Sinh nhật: {user.dob}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600 mb-1">Thành viên từ</div>
                  <div className="font-semibold">{user.memberSince}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-semibold mb-1">{user.totalCourses}</div>
                  <div className="text-sm text-gray-600">Khóa học</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-semibold mb-1">{user.completedCourses}</div>
                  <div className="text-sm text-gray-600">Hoàn thành</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-2xl font-semibold mb-1">{user.certificates}</div>
                  <div className="text-sm text-gray-600">Chứng chỉ</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Hoạt Động Gần Đây</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 pb-4 border-b">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Hoàn thành khóa Giao Tiếp Cơ Bản</div>
                      <div className="text-sm text-gray-600">15/03/2026</div>
                    </div>
                  </div>

                  <div className="flex gap-4 pb-4 border-b">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Đăng ký khóa IELTS Intensive</div>
                      <div className="text-sm text-gray-600">01/04/2026</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Đăng ký khóa Business English</div>
                      <div className="text-sm text-gray-600">05/04/2026</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg">Chứng Chỉ</h3>
                  <Button variant="outline" size="sm">Xem Tất Cả</Button>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Giao Tiếp Cơ Bản</div>
                    <div className="text-sm text-gray-600">Hoàn thành ngày 15/03/2026</div>
                  </div>
                  <Button variant="outline" size="sm">Tải Xuống</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
