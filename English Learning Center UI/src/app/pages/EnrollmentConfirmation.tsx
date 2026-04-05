import { useNavigate } from 'react-router';
import { CheckCircle, Calendar, Clock, MapPin, Mail, Download, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function EnrollmentConfirmation() {
  const navigate = useNavigate();

  const enrollment = {
    confirmationNumber: 'ENG2026050001',
    courseName: 'IELTS Intensive 6.5+',
    className: 'Thứ 2, 4, 6 - 19:00-21:00',
    startDate: '15/05/2026',
    location: 'EngCenter - 123 Đường ABC, Quận 1, TP.HCM',
    studentName: 'Nguyễn Văn A',
    email: 'student@example.com',
    amount: 6500000,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl mb-2">Đăng Ký Thành Công!</h1>
          <p className="text-gray-600">
            Cảm ơn bạn đã tin tưởng và lựa chọn EngCenter
          </p>
        </div>

        {/* Confirmation Details */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-1">Mã xác nhận</div>
              <div className="text-2xl text-indigo-600">{enrollment.confirmationNumber}</div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Khóa học</div>
                <div className="font-semibold">{enrollment.courseName}</div>
                <div className="text-sm text-gray-600">{enrollment.className}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Ngày khai giảng</span>
                  </div>
                  <div>{enrollment.startDate}</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Địa điểm</span>
                  </div>
                  <div>{enrollment.location}</div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Học viên</span>
                  <span className="font-semibold">{enrollment.studentName}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Email</span>
                  <span>{enrollment.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Số tiền đã thanh toán</span>
                  <span className="text-lg font-semibold text-indigo-600">
                    {enrollment.amount.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg mb-4">Các Bước Tiếp Theo</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="font-semibold mb-1">Kiểm tra email xác nhận</div>
                  <div className="text-sm text-gray-600">
                    Chúng tôi đã gửi email xác nhận kèm theo hướng dẫn chi tiết đến {enrollment.email}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="font-semibold mb-1">Chuẩn bị cho buổi học đầu tiên</div>
                  <div className="text-sm text-gray-600">
                    Vui lòng đến trước 15 phút để làm thủ tục và nhận tài liệu
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="font-semibold mb-1">Tham gia nhóm học tập</div>
                  <div className="text-sm text-gray-600">
                    Link tham gia nhóm Zalo/Telegram sẽ được gửi qua email
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="flex-1">
            <Download className="w-5 h-5 mr-2" />
            Tải Hóa Đơn
          </Button>
          <Button variant="outline" className="flex-1">
            <Mail className="w-5 h-5 mr-2" />
            Gửi Lại Email
          </Button>
          <Button
            onClick={() => navigate('/my-courses')}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700"
          >
            Xem Khóa Học
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => navigate('/')}>
            Quay Về Trang Chủ
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
