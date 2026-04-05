import { useNavigate } from 'react-router';
import { Gift, MapPin, Award, BookOpen, Users, Clock, Star, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from 'figma:asset/276fa071eff1c9518541eec04d97600de73d5a0d.png';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Gift,
      title: 'Đội Ngũ Tinh Hoa',
      description: '100% giảng viên bản ngữ và Việt Nam đạt chuẩn TESOL/CELTA với hơn 5 năm kinh nghiệm thực chiến.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Phương Pháp Hiện Đại',
      description: 'Ứng dụng công nghệ AI vào môi trường học kết hợp với lộ trình cá nhân hóa tối ưu cho từng học viên.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Award,
      title: 'Cam Kết Đầu Ra',
      description: 'Hợp đồng đào tạo rõ ràng, cam kết đạt kết quả đầu ra bằng văn bản. Học lại miễn phí nếu chưa đạt.',
      color: 'bg-amber-100 text-amber-600'
    },
  ];

  const courses = [
    {
      id: 1,
      title: 'IELTS Intensive',
      level: 'Trung cấp - Cao cấp',
      duration: '3 tháng',
      students: 248,
      rating: 4.8,
      price: '6.500.000đ',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Giao Tiếp Cơ Bản',
      level: 'Sơ cấp',
      duration: '4 tháng',
      students: 432,
      rating: 4.9,
      price: '4.800.000đ',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'TOEIC 700+',
      level: 'Trung cấp',
      duration: '2 tháng',
      students: 356,
      rating: 4.7,
      price: '5.200.000đ',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Tiếng Anh Thiếu Nhi',
      level: '6-12 tuổi',
      duration: '6 tháng',
      students: 521,
      rating: 5.0,
      price: '3.900.000đ',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop'
    },
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Học Viên' },
    { icon: BookOpen, value: '50+', label: 'Khóa Học' },
    { icon: Award, value: '95%', label: 'Tỉ Lệ Đạt' },
    { icon: Star, value: '4.9/5', label: 'Đánh Giá' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">
              Mở Khóa Tương Lai
              <br />
              Cùng <span className="border-b-4 border-white">EngCenter</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-indigo-100">
              Môi trường học tập tiêu chuẩn quốc tế, giảng viên tận tâm giúp
              <br />
              bạn chinh phục đỉnh cao ngôn ngữ dễ dàng và hiệu quả hơn bao giờ hết.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8"
                onClick={() => navigate('/signup')}
              >
                <Gift className="w-5 h-5 mr-2" />
                Bắt Đầu Ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                onClick={() => navigate('/courses')}
              >
                Tìm Hiểu Thêm
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Khóa Học Nổi Bật</h2>
            <p className="text-gray-600 text-lg">Chương trình học đa dạng, phù hợp với mọi trình độ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition cursor-pointer" onClick={() => navigate(`/courses/${course.id}`)}>
                <div className="aspect-video overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{course.level}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="text-indigo-600 font-semibold">{course.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" onClick={() => navigate('/courses')} className="bg-indigo-600 hover:bg-indigo-700">
              Xem Tất Cả Khóa Học
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Sẵn Sàng Bắt Đầu Hành Trình?</h2>
          <p className="text-lg mb-8 text-indigo-100">
            Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt dành cho học viên mới
          </p>
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-10"
            onClick={() => navigate('/signup')}
          >
            Đăng Ký Học Thử Miễn Phí
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
