import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Star, Clock, Users, Filter, Grid3x3, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function CourseList() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const courses = [
    {
      id: 1,
      title: 'IELTS Intensive 6.5+',
      level: 'Trung cấp - Cao cấp',
      duration: '3 tháng',
      students: 248,
      rating: 4.8,
      reviews: 142,
      price: 6500000,
      oldPrice: 8000000,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop',
      teacher: 'Ms. Sarah Johnson',
      schedule: 'Thứ 2, 4, 6 - 19:00-21:00',
      startDate: '15/05/2026',
    },
    {
      id: 2,
      title: 'Giao Tiếp Cơ Bản',
      level: 'Sơ cấp',
      duration: '4 tháng',
      students: 432,
      rating: 4.9,
      reviews: 286,
      price: 4800000,
      oldPrice: 6000000,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
      teacher: 'Mr. David Lee',
      schedule: 'Thứ 3, 5, 7 - 18:00-20:00',
      startDate: '20/05/2026',
    },
    {
      id: 3,
      title: 'TOEIC 700+ Cấp Tốc',
      level: 'Trung cấp',
      duration: '2 tháng',
      students: 356,
      rating: 4.7,
      reviews: 198,
      price: 5200000,
      oldPrice: 6500000,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      teacher: 'Ms. Emily Chen',
      schedule: 'Cuối tuần - 14:00-17:00',
      startDate: '10/05/2026',
    },
    {
      id: 4,
      title: 'Tiếng Anh Thiếu Nhi 6-12',
      level: '6-12 tuổi',
      duration: '6 tháng',
      students: 521,
      rating: 5.0,
      reviews: 345,
      price: 3900000,
      oldPrice: 5000000,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
      teacher: 'Ms. Anna White',
      schedule: 'Thứ 7, CN - 9:00-11:00',
      startDate: '18/05/2026',
    },
    {
      id: 5,
      title: 'Business English Pro',
      level: 'Cao cấp',
      duration: '3 tháng',
      students: 187,
      rating: 4.8,
      reviews: 124,
      price: 7200000,
      oldPrice: 9000000,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
      teacher: 'Mr. Michael Brown',
      schedule: 'Thứ 2, 4 - 19:30-21:30',
      startDate: '22/05/2026',
    },
    {
      id: 6,
      title: 'Luyện Phát Âm Chuẩn',
      level: 'Mọi trình độ',
      duration: '1 tháng',
      students: 298,
      rating: 4.6,
      reviews: 167,
      price: 2900000,
      oldPrice: 3500000,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop',
      teacher: 'Ms. Jennifer Lee',
      schedule: 'Thứ 3, 5 - 18:30-20:00',
      startDate: '12/05/2026',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl mb-2">Danh Sách Khóa Học</h1>
              <p className="text-gray-600">Tìm thấy {courses.length} khóa học</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Phổ biến nhất</SelectItem>
                  <SelectItem value="rating">Đánh giá cao</SelectItem>
                  <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                  <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3x3 className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-5 h-5" />
                </Button>
                <Button variant="outline" onClick={() => navigate('/courses/filter')}>
                  <Filter className="w-5 h-5 mr-2" />
                  Lọc
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`overflow-hidden hover:shadow-lg transition cursor-pointer ${
                viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
              }`}
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <div className={viewMode === 'list' ? 'sm:w-72 flex-shrink-0' : ''}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              </div>

              <CardContent className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                {course.oldPrice && (
                  <div className="inline-block px-2 py-1 bg-red-100 text-red-600 text-xs rounded mb-2">
                    Giảm {Math.round((1 - course.price / course.oldPrice) * 100)}%
                  </div>
                )}

                <h3 className="text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{course.level}</p>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-sm text-gray-500">({course.reviews} đánh giá)</span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration} • Bắt đầu {course.startDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {course.students} học viên
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    {course.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        {course.oldPrice.toLocaleString('vi-VN')}đ
                      </div>
                    )}
                    <div className="text-xl text-indigo-600">
                      {course.price.toLocaleString('vi-VN')}đ
                    </div>
                  </div>
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                    Chi tiết
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
