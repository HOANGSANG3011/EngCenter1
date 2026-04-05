import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, Users } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

export default function CourseManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const courses = [
    {
      id: 1,
      name: 'IELTS Intensive 6.5+',
      category: 'IELTS',
      level: 'Trung cấp',
      price: '6,500,000đ',
      students: 248,
      status: 'active',
      startDate: '15/05/2026',
    },
    {
      id: 2,
      name: 'Giao Tiếp Cơ Bản',
      category: 'Giao tiếp',
      level: 'Sơ cấp',
      price: '4,800,000đ',
      students: 432,
      status: 'active',
      startDate: '20/05/2026',
    },
    {
      id: 3,
      name: 'TOEIC 700+',
      category: 'TOEIC',
      level: 'Trung cấp',
      price: '5,200,000đ',
      students: 356,
      status: 'active',
      startDate: '10/05/2026',
    },
    {
      id: 4,
      name: 'Business English Pro',
      category: 'Business',
      level: 'Cao cấp',
      price: '7,200,000đ',
      students: 187,
      status: 'draft',
      startDate: '22/05/2026',
    },
    {
      id: 5,
      name: 'Tiếng Anh Thiếu Nhi',
      category: 'Thiếu nhi',
      level: '6-12 tuổi',
      price: '3,900,000đ',
      students: 521,
      status: 'active',
      startDate: '18/05/2026',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn isAdmin />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl mb-1">Quản Lý Khóa Học</h1>
            <p className="text-gray-600">Quản lý tất cả khóa học của trung tâm</p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-5 h-5 mr-2" />
            Tạo Khóa Học Mới
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Tìm kiếm khóa học..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="active">Đang hoạt động</SelectItem>
                  <SelectItem value="draft">Nháp</SelectItem>
                  <SelectItem value="archived">Đã lưu trữ</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-5 h-5 mr-2" />
                Lọc
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Course Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên Khóa Học</TableHead>
                    <TableHead>Danh Mục</TableHead>
                    <TableHead>Trình Độ</TableHead>
                    <TableHead>Học Phí</TableHead>
                    <TableHead>Học Viên</TableHead>
                    <TableHead>Trạng Thái</TableHead>
                    <TableHead>Khai Giảng</TableHead>
                    <TableHead className="text-right">Thao Tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-semibold">{course.name}</TableCell>
                      <TableCell>{course.category}</TableCell>
                      <TableCell>{course.level}</TableCell>
                      <TableCell>{course.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          {course.students}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            course.status === 'active'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {course.status === 'active' ? 'Hoạt động' : 'Nháp'}
                        </span>
                      </TableCell>
                      <TableCell>{course.startDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Hiển thị {filteredCourses.length} trong tổng số {courses.length} khóa học
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Trước
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Sau
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
