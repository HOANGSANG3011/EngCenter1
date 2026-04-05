import { useNavigate } from 'react-router';
import { Users, BookOpen, DollarSign, TrendingUp, Calendar, Award } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: 'Tổng Học Viên', value: '1,248', change: '+12%', color: 'bg-indigo-100 text-indigo-600' },
    { icon: BookOpen, label: 'Khóa Học Hoạt Động', value: '52', change: '+3', color: 'bg-cyan-100 text-cyan-600' },
    { icon: DollarSign, label: 'Doanh Thu Tháng', value: '850M', change: '+18%', color: 'bg-green-100 text-green-600' },
    { icon: Award, label: 'Chứng Chỉ Cấp', value: '346', change: '+25', color: 'bg-amber-100 text-amber-600' },
  ];

  const recentEnrollments = [
    { id: 1, student: 'Nguyễn Văn A', course: 'IELTS Intensive', date: '05/04/2026', amount: '6,500,000đ' },
    { id: 2, student: 'Trần Thị B', course: 'TOEIC 700+', date: '05/04/2026', amount: '5,200,000đ' },
    { id: 3, student: 'Lê Văn C', course: 'Business English', date: '04/04/2026', amount: '7,200,000đ' },
    { id: 4, student: 'Phạm Thị D', course: 'Giao Tiếp Cơ Bản', date: '04/04/2026', amount: '4,800,000đ' },
  ];

  const upcomingClasses = [
    { id: 1, course: 'IELTS Intensive', time: 'Hôm nay, 19:00', students: 12, teacher: 'Ms. Sarah' },
    { id: 2, course: 'TOEIC 700+', time: 'Hôm nay, 18:00', students: 15, teacher: 'Mr. David' },
    { id: 3, course: 'Business English', time: 'Ngày mai, 19:30', students: 8, teacher: 'Mr. Michael' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn isAdmin />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl mb-1">Trang Quản Trị</h1>
            <p className="text-gray-600">Tổng quan hoạt động của trung tâm</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate('/admin/courses')}>
              <BookOpen className="w-5 h-5 mr-2" />
              Quản Lý Khóa Học
            </Button>
            <Button variant="outline" onClick={() => navigate('/admin/users')}>
              <Users className="w-5 h-5 mr-2" />
              Quản Lý Người Dùng
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Enrollments */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg">Đăng Ký Gần Đây</h3>
                <Button variant="ghost" size="sm">Xem Tất Cả</Button>
              </div>
              <div className="space-y-3">
                {recentEnrollments.map((enrollment) => (
                  <div key={enrollment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{enrollment.student}</div>
                      <div className="text-sm text-gray-600">{enrollment.course}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-indigo-600">{enrollment.amount}</div>
                      <div className="text-xs text-gray-500">{enrollment.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Classes */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg">Lớp Học Sắp Tới</h3>
                <Button variant="ghost" size="sm">Lịch Đầy Đủ</Button>
              </div>
              <div className="space-y-3">
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold mb-1">{classItem.course}</div>
                      <div className="text-sm text-gray-600">{classItem.time} • {classItem.teacher}</div>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {classItem.students}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg mb-4">Thao Tác Nhanh</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto flex-col py-4">
                  <BookOpen className="w-6 h-6 mb-2" />
                  Tạo Khóa Học Mới
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Users className="w-6 h-6 mb-2" />
                  Thêm Học Viên
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Calendar className="w-6 h-6 mb-2" />
                  Xếp Lịch Học
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <TrendingUp className="w-6 h-6 mb-2" />
                  Báo Cáo Doanh Thu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
