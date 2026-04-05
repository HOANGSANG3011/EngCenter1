import { useNavigate, useParams } from 'react-router';
import { Star, Clock, Users, Calendar, MapPin, Award, CheckCircle, Play } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const course = {
    id: 1,
    title: 'IELTS Intensive 6.5+',
    subtitle: 'Chinh phục IELTS 6.5+ trong 3 tháng',
    level: 'Trung cấp - Cao cấp',
    duration: '3 tháng',
    students: 248,
    rating: 4.8,
    reviews: 142,
    price: 6500000,
    oldPrice: 8000000,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=400&fit=crop',
    teacher: {
      name: 'Ms. Sarah Johnson',
      title: 'IELTS Expert - CELTA Certified',
      experience: '8 năm kinh nghiệm',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    schedule: 'Thứ 2, 4, 6 - 19:00-21:00',
    startDate: '15/05/2026',
    location: 'EngCenter - Quận 1, TP.HCM',
    highlights: [
      'Lộ trình học cá nhân hóa',
      'Cam kết đầu ra 6.5+',
      'Luyện đề thi thật hàng tuần',
      'Tài liệu Cambridge chính thức',
      'Học lại miễn phí nếu chưa đạt',
    ],
    curriculum: [
      {
        title: 'Module 1: Listening Skills',
        lessons: [
          'Chiến lược làm bài Listening',
          'Luyện nghe các chủ đề thường gặp',
          'Practice tests',
        ],
      },
      {
        title: 'Module 2: Reading Skills',
        lessons: [
          'Kỹ năng đọc hiểu nhanh',
          'Các dạng câu hỏi trong IELTS Reading',
          'Time management',
        ],
      },
      {
        title: 'Module 3: Writing Skills',
        lessons: [
          'Task 1: Graphs, Charts, Diagrams',
          'Task 2: Essay Writing',
          'Chữa bài 1-1 với giảng viên',
        ],
      },
      {
        title: 'Module 4: Speaking Skills',
        lessons: [
          'Part 1, 2, 3 strategies',
          'Fluency & Pronunciation',
          'Mock tests with native speakers',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      {/* Course Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                {course.level}
              </div>
              <h1 className="text-3xl md:text-4xl mb-3">{course.title}</h1>
              <p className="text-lg text-indigo-100 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-indigo-200">({course.reviews} đánh giá)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.teacher.avatar}
                  alt={course.teacher.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{course.teacher.name}</div>
                  <div className="text-sm text-indigo-200">{course.teacher.title}</div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="overview">Tổng Quan</TabsTrigger>
                <TabsTrigger value="curriculum">Chương Trình</TabsTrigger>
                <TabsTrigger value="reviews">Đánh Giá</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-4">Điểm Nổi Bật</h3>
                    <div className="space-y-3">
                      {course.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-4">Thông Tin Khóa Học</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-600">Lịch học</div>
                          <div>{course.schedule}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-600">Ngày khai giảng</div>
                          <div>{course.startDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-600">Địa điểm</div>
                          <div>{course.location}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-3">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-2 text-gray-600">
                            <Play className="w-4 h-4" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-8">
                      <div className="text-5xl font-bold text-indigo-600 mb-2">{course.rating}</div>
                      <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="text-gray-600">{course.reviews} đánh giá</div>
                    </div>
                    {/* Add individual reviews here if needed */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl text-indigo-600">
                      {course.price.toLocaleString('vi-VN')}đ
                    </span>
                    {course.oldPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {course.oldPrice.toLocaleString('vi-VN')}đ
                      </span>
                    )}
                  </div>
                  {course.oldPrice && (
                    <div className="text-sm text-red-600">
                      Tiết kiệm {((1 - course.price / course.oldPrice) * 100).toFixed(0)}%
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => navigate(`/courses/${id}/select-class`)}
                  >
                    Đăng Ký Ngay
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Học Thử Miễn Phí
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-5 h-5 text-indigo-600" />
                    <span>Chứng chỉ hoàn thành</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Cam kết đầu ra</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-5 h-5 text-cyan-600" />
                    <span>Lớp học nhỏ (max 15 sv)</span>
                  </div>
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
