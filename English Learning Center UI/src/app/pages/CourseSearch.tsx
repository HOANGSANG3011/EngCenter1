import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function CourseSearch() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    keyword: '',
    level: '',
    type: '',
    schedule: '',
    location: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/courses');
  };

  const popularSearches = [
    'IELTS',
    'Giao tiếp cơ bản',
    'TOEIC',
    'Tiếng Anh thiếu nhi',
    'Business English',
    'Luyện phát âm',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl mb-3">Tìm Khóa Học Phù Hợp</h1>
            <p className="text-lg text-indigo-100">
              Khám phá hơn 50+ khóa học chất lượng cao dành cho bạn
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="keyword" className="text-gray-700">Từ khóa</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="keyword"
                    type="text"
                    placeholder="Nhập tên khóa học..."
                    value={searchData.keyword}
                    onChange={(e) => setSearchData({ ...searchData, keyword: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="level" className="text-gray-700">Trình độ</Label>
                <Select value={searchData.level} onValueChange={(value) => setSearchData({ ...searchData, level: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Chọn trình độ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Sơ cấp</SelectItem>
                    <SelectItem value="intermediate">Trung cấp</SelectItem>
                    <SelectItem value="advanced">Cao cấp</SelectItem>
                    <SelectItem value="all">Tất cả trình độ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type" className="text-gray-700">Loại khóa học</Label>
                <Select value={searchData.type} onValueChange={(value) => setSearchData({ ...searchData, type: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Chọn loại" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ielts">IELTS</SelectItem>
                    <SelectItem value="toeic">TOEIC</SelectItem>
                    <SelectItem value="conversation">Giao tiếp</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="kids">Thiếu nhi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="schedule" className="text-gray-700">Lịch học</Label>
                <Select value={searchData.schedule} onValueChange={(value) => setSearchData({ ...searchData, schedule: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Chọn lịch học" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Sáng (8h-12h)</SelectItem>
                    <SelectItem value="afternoon">Chiều (14h-18h)</SelectItem>
                    <SelectItem value="evening">Tối (18h-21h)</SelectItem>
                    <SelectItem value="weekend">Cuối tuần</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/courses/filter')}
                className="sm:w-auto"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Bộ Lọc Nâng Cao
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                size="lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Tìm Kiếm
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl mb-4">Tìm kiếm phổ biến</h2>
        <div className="flex flex-wrap gap-3">
          {popularSearches.map((term, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchData({ ...searchData, keyword: term });
                navigate('/courses');
              }}
              className="px-4 py-2 bg-white rounded-full border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 transition"
            >
              {term}
            </button>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-3xl text-indigo-600 mb-1">50+</div>
              <div className="text-gray-600">Khóa học đa dạng</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-3xl text-cyan-600 mb-1">Linh hoạt</div>
              <div className="text-gray-600">Lịch học đa dạng</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl text-amber-600 mb-1">10+</div>
              <div className="text-gray-600">Địa điểm học tập</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
