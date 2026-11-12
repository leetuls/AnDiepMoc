/**
 * AN DIỆP MỘC — SẢN PHẨM TỪ THIÊN NHIÊN ("Xanh từ lá - Lành từ tâm")
 * Interactive Script (jQuery 3.7+)
 */

$(document).ready(function () {

    /* ==========================================================================
       1. DỮ LIỆU CHI TIẾT 6 SẢN PHẨM AN DIỆP MỘC
       ========================================================================== */
    const PRODUCTS_DATA = {
        sp1: {
            id: 'sp1',
            name: 'Cao Mềm Thảo Mộc An Diệp Mộc',
            tagline: 'Tinh hoa thảo mộc – Cho sức khỏe mỗi ngày',
            category: 'Bồi bổ & Tuần hoàn',
            volume: 'Lọ thủy tinh 150 ml',
            price: 150000,
            priceFormatted: '150.000đ',
            unit: 'lọ',
            labelImg: 'AnhSanPham/Nhãn Cao Mềm Thảo Mộc An Diệp Mộc.png',
            realImg: 'AnhQuaTrinhLam/image38.jpeg',
            giftImg: 'AnhQuaTang/2aOboRC6fVoq93tqNGccRgqL4mV9JDjAcfCEHhLc.jpg',
            ingredients: 'Chiết xuất cô đặc từ Lá ngải cứu, Lá đinh lăng, Lá trà xanh bản địa kết hợp Mật ong rừng nguyên chất.',
            benefits: [
                'Tăng tuần hoàn máu não, cải thiện trí nhớ và kích thích tiêu hóa.',
                'Hỗ trợ giảm xơ vữa động mạch, bảo vệ thành mạch nhờ hoạt chất EGCG & Polyphenol.',
                'Giảm đau cơ, đau nhức xương khớp và tê bì chân tay.',
                'Giúp tinh thần sảng khoái, giảm căng thẳng mệt mỏi, tạo giấc ngủ sâu tự nhiên.'
            ],
            usage: 'Lấy 1 thìa cà phê cao mềm, pha với khoảng 100–150ml nước ấm để uống hoặc có thể ăn trực tiếp. Nên dùng vào buổi tối sau bữa ăn khoảng 60 phút.',
            audience: 'Người trung niên, người cao tuổi, người làm việc trí óc căng thẳng, mất ngủ, đau mỏi xương khớp, học sinh – sinh viên.',
            certification: 'Đã kiểm định tại Viện Nghiên cứu Tăng trưởng Xanh - Học viện Nông nghiệp Việt Nam (Mã mẫu TP10.02: Giàu Saponin, Polyphenol, Flavonoid, EGCG; Không phát hiện kim loại nặng & vi sinh vật gây hại).'
        },
        sp2: {
            id: 'sp2',
            name: 'Nước Xúc Miệng Thảo Mộc An Diệp Mộc',
            tagline: 'Sạch khoang miệng – Thơm hơi thở – Tự tin mỗi ngày',
            category: 'Chăm sóc Răng miệng',
            volume: 'Chai 500 ml',
            price: 40000,
            priceFormatted: '40.000đ',
            unit: 'chai',
            labelImg: 'AnhSanPham/a9471de8-c2d2-4150-922e-738efbfd77a3.png',
            realImg: 'AnhQuaTrinhLam/image41.jpeg',
            giftImg: 'AnhQuaTang/2aOboRC6e8NKP3CNBKHVW6ukZmS88V5LMxjPde3k.jpg',
            ingredients: 'Dịch chưng cất lôi cuốn hơi nước từ Lá trầu không, Lá trà xanh, Lá ngải cứu và Muối ăn tinh khiết.',
            benefits: [
                'Làm sạch khoang miệng, loại bỏ thức ăn thừa và ngăn ngừa mảng bám.',
                'Ức chế mạnh vi khuẩn Streptococcus mutans gây sâu răng, chống viêm họng và viêm nướu lợi.',
                'Bảo vệ men răng tự nhiên, hỗ trợ làm trắng răng nhẹ nhàng.',
                'Khử mùi hôi miệng hiệu quả, mang lại hơi thở thảo mộc thơm mát, tự tin.'
            ],
            usage: 'Ngậm và súc miệng kỹ trong 30–45 giây hằng ngày sau khi thức dậy, sau bữa ăn và trước khi đi ngủ (không cần súc lại bằng nước lọc).',
            audience: 'Mọi lứa tuổi trong gia đình: người lớn, người cao tuổi và trẻ em.',
            certification: 'Đã kiểm định tại Học viện Nông nghiệp Việt Nam (Mã mẫu TP10.03: Polyphenol 120 mg GAE/L, EGCG 18 mg/L, pH 6.6 an toàn cho men răng).'
        },
        sp3: {
            id: 'sp3',
            name: 'Siro Thảo Mộc An Diệp Mộc',
            tagline: 'Giảm ho – Dịu họng – Long đờm tự nhiên',
            category: 'Chăm sóc Hô hấp',
            volume: 'Chai 100 ml',
            price: 25000,
            priceFormatted: '25.000đ',
            unit: 'lọ',
            labelImg: 'AnhSanPham/fd990e08-570c-42ba-8521-9680e077d368.jfif',
            realImg: 'AnhQuaTrinhLam/image39.jpeg',
            giftImg: 'AnhQuaTang/2aOboRC6fcSjecnUX8O6IB6D1hOP0KeeRl73KvD6.jpg',
            ingredients: 'Ngải cứu, Trà xanh, Đinh lăng, Mật ong tự nhiên, Tinh dầu gừng bản địa.',
            benefits: [
                'Giảm ho khan, ho gió, ho có đờm và làm dịu nhanh cảm giác đau rát cổ họng.',
                'Hỗ trợ long đờm và làm loãng dịch nhầy đường hô hấp.',
                'Kháng khuẩn tự nhiên vùng hầu họng khi thời tiết giao mùa.',
                'Hỗ trợ điều hòa và tăng cường sức đề kháng miễn dịch.'
            ],
            usage: 'Uống sau bữa ăn khoảng 30 phút. Người lớn: 10–15ml/lần, ngày 3–4 lần. Trẻ em trên 1 tuổi: 5ml/lần, ngày 2–3 lần. Bảo quản tối đa 14–28 ngày ở nhiệt độ thường hoặc 30–60 ngày ở ngăn mát tủ lạnh sau khi mở nắp.',
            audience: 'Trẻ em trên 1 tuổi và người lớn bị ho, viêm họng, cảm lạnh khi giao mùa. (Chống chỉ định: Trẻ em dưới 1 tuổi, phụ nữ mang thai).',
            certification: 'Sản xuất theo quy trình cô đặc kiểm soát nhiệt độ dưới sự cố vấn của giảng viên Hóa học ĐH Sư phạm Thái Nguyên.'
        },
        sp4: {
            id: 'sp4',
            name: 'Kẹo Trị Ho Thảo Mộc (Viên Trị Ho)',
            tagline: 'Giảm ho – Bổ phế – Ấm họng tức thì',
            category: 'Chăm sóc Hô hấp',
            volume: 'Gói zip 10 viên',
            price: 15000,
            priceFormatted: '15.000đ',
            unit: 'gói',
            labelImg: 'AnhSanPham/30bd6de5-4e9c-4074-a571-affa88e2da86.jfif',
            realImg: 'AnhQuaTrinhLam/image40.jpeg',
            giftImg: 'AnhQuaTang/2aOboRC6fVoq93tqNGccRgqL4mV9JDjAcfCEHhLc.jpg',
            ingredients: 'Lá ngải cứu, Lá đinh lăng, Lá trà xanh cô đặc kết hợp Mật ong rừng nguyên chất.',
            benefits: [
                'Làm dịu nhanh cơn ngứa cổ, đau rát họng và các cơn ho khan.',
                'Bổ phế, giữ ấm đường hô hấp trong những ngày thu đông giá lạnh vùng cao.',
                'Tăng cường đề kháng hô hấp, làm thơm miệng tự nhiên.',
                'Thiết kế túi zip 10 viên nhỏ gọn, tiện lợi mang theo khi đi học, đi làm.'
            ],
            usage: 'Trẻ em (trên 6 tuổi) và người lớn ngậm kẹo từ từ trong khoang miệng khi ngứa họng hoặc có cơn ho. Hạn chế uống nước ngay sau khi ngậm để hoạt chất lưu lại vùng họng lâu hơn.',
            audience: 'Học sinh, sinh viên, giáo viên, người nói nhiều, người bị ho ngứa họng. (Khuyến cáo: Không dùng cho trẻ em dưới 6 tuổi và phụ nữ mang thai).',
            certification: '100% thảo mộc tự nhiên và mật ong, không chất bảo quản tổng hợp.'
        },
        sp5: {
            id: 'sp5',
            name: 'Gối Kê Cổ Thảo Mộc (Gối Kê Đầu Ô Tô)',
            tagline: 'Nâng đỡ vùng cổ êm ái – An thần chống mệt mỏi',
            category: 'Thư giãn & Đời sống',
            volume: 'Gối chữ U cao cấp',
            price: 60000,
            priceFormatted: '60.000đ',
            unit: 'chiếc',
            labelImg: 'AnhSanPham/324b502d-9d30-4897-9f3f-869a3251df28.jfif',
            realImg: 'AnhQuaTrinhLam/image43.jpeg',
            giftImg: 'AnhQuaTang/2aOboRC6e8NKP3CNBKHVW6ukZmS88V5LMxjPde3k.jpg',
            ingredients: 'Lá ngải cứu bản địa sấy khô tự nhiên giữ trọn tinh dầu kết hợp Bông mềm tự nhiên và vỏ vải nhung xanh dịu mắt.',
            benefits: [
                'Nâng đỡ tối ưu vùng đốt sống cổ và vai gáy khi ngồi làm việc hoặc đi tàu xe.',
                'Hương thơm thảo mộc ngải cứu thoảng nhẹ giúp an thần, thư giãn thần kinh và chống say xe hiệu quả.',
                'Giảm nhức mỏi cổ vai gáy sau giờ học tập, đọc sách, xem phim.',
                'Độ đàn hồi êm ái, thoáng khí, thân thiện với làn da.'
            ],
            usage: 'Đặt gối ôm sát dưới vùng cổ khi nằm nghỉ hoặc ngồi tựa lưng; sử dụng khi lái xe, đi ô tô đường dài, nghỉ trưa tại văn phòng, đọc sách, xem tivi.',
            audience: 'Dân văn phòng, tài xế lái xe, người hay đi xe đường dài bị say xe, người lớn tuổi, học sinh – sinh viên.',
            certification: 'Thảo mộc sấy tự nhiên không hóa chất tạo mùi nhân tạo.'
        },
        sp6: {
            id: 'sp6',
            name: 'Túi Lọc Ngâm Chân Thảo Mộc',
            tagline: 'Làm ấm chân – Thông kinh mạch – An thần dễ ngủ',
            category: 'Thư giãn & Đời sống',
            volume: 'Túi zip nhiều gói lọc',
            price: 25000,
            priceFormatted: '25.000đ',
            unit: 'túi',
            labelImg: 'AnhSanPham/332f7ff7-2d31-498e-9058-169ee5fa1cec.jfif',
            realImg: 'AnhQuaTrinhLam/image42.jpeg',
            giftImg: 'AnhQuaTang/2aOboRC6fcSjecnUX8O6IB6D1hOP0KeeRl73KvD6.jpg',
            ingredients: 'Lá ngải cứu bản địa và Gừng già sấy khô nghiền nhỏ đóng trong túi lọc tiện dụng.',
            benefits: [
                'Làm ấm đôi bàn chân (“trái tim thứ hai” của cơ thể), xua tan hàn khí mùa lạnh.',
                'Đả thông kinh mạch, tăng cường lưu thông khí huyết, giảm tê bì và đau mỏi gót chân.',
                'Thư giãn tinh thần, an thần tự nhiên, giúp đi vào giấc ngủ nhanh và ngủ sâu giấc.',
                'Khử mùi hôi chân, mang lại hương thơm thảo mộc ấm áp dễ chịu.'
            ],
            usage: 'Cho 1–2 gói túi lọc vào chậu nước sôi hoặc nước ấm (khoảng 40–45°C), ngâm khoảng 3 phút cho tinh chất thảo mộc tan ra rồi ngâm chân từ 15–20 phút vào buổi tối trước khi đi ngủ.',
            audience: 'Người cao tuổi, người trung niên, phụ nữ chân tay lạnh, người đi giày cả ngày hoặc khó ngủ.',
            certification: '100% Ngải cứu & Gừng sẻ bản địa xã Hoàng Văn Thụ, Lạng Sơn.'
        }
    };

    /* ==========================================================================
       2. DỮ LIỆU 34 ẢNH QUÁ TRÌNH LÀM SẢN PHẨM (AnhQuaTrinhLam)
       ========================================================================== */
    const PROCESS_IMAGES = [
        // Nhóm 1: Thu hái & Sơ chế nguyên liệu (12 ảnh)
        { src: 'AnhQuaTrinhLam/image8.png', group: 'so-che', tag: 'Thu hái dược liệu', caption: 'Học sinh trực tiếp thu hái từng ngọn lá ngải cứu tươi xanh tại vườn địa phương' },
        { src: 'AnhQuaTrinhLam/image12.png', group: 'so-che', tag: 'Thu hái dược liệu', caption: 'Nhóm dự án thu hái lá trầu không sạch tại vườn hộ dân xã Hoàng Văn Thụ' },
        { src: 'AnhQuaTrinhLam/image11.jpeg', group: 'so-che', tag: 'Vùng nguyên liệu', caption: 'Vườn lá trầu không xanh mướt, dày lá, giàu tinh dầu kháng khuẩn tự nhiên' },
        { src: 'AnhQuaTrinhLam/image10.jpeg', group: 'so-che', tag: 'Sơ chế rửa sạch', caption: 'Lá trầu không tươi sau khi thu hái được rửa sạch và để ráo trong rổ' },
        { src: 'AnhQuaTrinhLam/image29.jpeg', group: 'so-che', tag: 'Nguyên liệu tươi', caption: 'Nguồn nguyên liệu lá trà xanh, đinh lăng và gừng tươi thu mua từ nông dân' },
        { src: 'AnhQuaTrinhLam/image28.png', group: 'so-che', tag: 'Nguyên liệu gừng', caption: 'Gừng già bản địa được rửa sạch đất cát, chuẩn bị đưa vào chế biến' },
        { src: 'AnhQuaTrinhLam/image13.png', group: 'so-che', tag: 'Phơi ráo thảo mộc', caption: 'Lá ngải cứu và đinh lăng sau khi rửa sạch được hong ráo trên mẹt tre' },
        { src: 'AnhQuaTrinhLam/image14.png', group: 'so-che', tag: 'Phơi ráo tự nhiên', caption: 'Các mẹt thảo mộc tươi sạch được hong dưới nắng nhẹ để giữ trọn tinh dầu' },
        { src: 'AnhQuaTrinhLam/image17.jpeg', group: 'so-che', tag: 'Phân loại & Ghi chép', caption: 'Các thành viên nhóm dự án tỉ mỉ phân loại từng loại lá và ghi chép nhật ký' },
        { src: 'AnhQuaTrinhLam/image30.png', group: 'so-che', tag: 'Thái nhỏ dược liệu', caption: 'Sơ chế, thái nhỏ lá trà xanh, trầu không và ngải cứu trước khi chiết xuất' },
        { src: 'AnhQuaTrinhLam/image31.png', group: 'so-che', tag: 'Thiết bị nghiền', caption: 'Máy xay nghiền dược liệu inox công suất cao hỗ trợ làm nhỏ thảo mộc' },
        { src: 'AnhQuaTrinhLam/image32.jpeg', group: 'so-che', tag: 'Nghiền thảo mộc', caption: 'Thảo mộc được xay nghiền mịn giúp tăng tối đa diện tích tiếp xúc khi nấu cao' },

        // Nhóm 2: Nấu cao thảo mộc (12 ảnh)
        { src: 'AnhQuaTrinhLam/image9.png', group: 'nau-cao', tag: 'Chuẩn bị nấu cao', caption: 'Kiểm tra nguyên liệu ngải cứu và ghi chép công thức trước khi đưa vào nồi chiết' },
        { src: 'AnhQuaTrinhLam/image15.png', group: 'nau-cao', tag: 'Nạp nguyên liệu', caption: 'Đưa lá thảo mộc đã sơ chế sạch vào nồi nấu chiết xuất inox chuyên dụng' },
        { src: 'AnhQuaTrinhLam/image16.png', group: 'nau-cao', tag: 'Hướng dẫn kỹ thuật', caption: 'Chuyên gia và thầy giáo hướng dẫn học sinh kiểm tra nồi chiết xuất' },
        { src: 'AnhQuaTrinhLam/image18.png', group: 'nau-cao', tag: 'Vận hành nồi chiết', caption: 'Điều chỉnh nhiệt độ và công suất điện trên hệ thống nồi nấu thảo mộc' },
        { src: 'AnhQuaTrinhLam/image19.png', group: 'nau-cao', tag: 'Theo dõi nhiệt độ', caption: 'Nhóm học sinh theo dõi sát sao quá trình đun chiết xuất dược liệu' },
        { src: 'AnhQuaTrinhLam/image20.png', group: 'nau-cao', tag: 'Ghi chép thông số', caption: 'Ghi chép thời gian và nhiệt độ chiết xuất để chuẩn hóa quy trình sản xuất' },
        { src: 'AnhQuaTrinhLam/image21.png', group: 'nau-cao', tag: 'Kiểm tra dịch chiết', caption: 'Mở nắp kiểm tra độ sôi và hương thơm của dịch chiết thảo mộc' },
        { src: 'AnhQuaTrinhLam/image22.jpeg', group: 'nau-cao', tag: 'Đun sôi chiết xuất', caption: 'Dịch thảo mộc sôi đều bên trong lồng lưới lọc inox của nồi chiết' },
        { src: 'AnhQuaTrinhLam/image23.png', group: 'nau-cao', tag: 'Tách lọc bã dược liệu', caption: 'Quá trình sôi chiết xuất giúp toàn bộ hoạt chất hòa tan vào dịch lỏng' },
        { src: 'AnhQuaTrinhLam/image24.png', group: 'nau-cao', tag: 'Cô đặc cao thảo mộc', caption: 'Dịch chiết chuyển màu nâu đen sánh đặc giàu hoạt chất trong quá trình cô cao' },
        { src: 'AnhQuaTrinhLam/image25.png', group: 'nau-cao', tag: 'Khuấy cô đặc cao', caption: 'Khuấy đều liên tục trong giai đoạn cô đặc để cao mềm mịn, không bị cháy khét' },
        { src: 'AnhQuaTrinhLam/image26.jpeg', group: 'nau-cao', tag: 'Phối chế & Cô sánh', caption: 'Thầy giáo hướng dẫn học sinh kỹ thuật kiểm tra độ sánh chuẩn của cao mềm' },

        // Nhóm 3: Chưng cất lôi cuốn hơi nước & Chiết rót (4 ảnh)
        { src: 'AnhQuaTrinhLam/image34.jpeg', group: 'chung-cat', tag: 'Chưng cất hơi nước', caption: 'Nhóm học sinh quan sát và ghi chép quy trình chưng cất lôi cuốn hơi nước' },
        { src: 'AnhQuaTrinhLam/image35.jpeg', group: 'chung-cat', tag: 'Vận hành hệ thống', caption: 'Thầy giáo hướng dẫn nguyên lý ngưng tụ tinh dầu qua ống sinh hàn' },
        { src: 'AnhQuaTrinhLam/image36.jpeg', group: 'chung-cat', tag: 'Hệ thống sinh hàn', caption: 'Toàn cảnh bộ thiết bị chưng cất lôi cuốn hơi nước với ống sinh hàn thủy tinh cầu' },
        { src: 'AnhQuaTrinhLam/image37.jpeg', group: 'chung-cat', tag: 'Tinh dầu ngưng tụ', caption: 'Cận cảnh những giọt tinh dầu và nước cất thảo mộc tinh khiết ngưng tụ' },

        // Nhóm 4: Sản phẩm hoàn thiện (6 ảnh)
        { src: 'AnhQuaTrinhLam/image38.jpeg', group: 'thanh-pham', tag: 'Thành phẩm hoàn thiện', caption: 'Thành phẩm: Lọ Cao Mềm Thảo Mộc An Diệp Mộc (150ml)' },
        { src: 'AnhQuaTrinhLam/image39.jpeg', group: 'thanh-pham', tag: 'Thành phẩm hoàn thiện', caption: 'Thành phẩm: Chai Siro Thảo Mộc An Diệp Mộc giảm ho, dịu họng (100ml)' },
        { src: 'AnhQuaTrinhLam/image40.jpeg', group: 'thanh-pham', tag: 'Thành phẩm hoàn thiện', caption: 'Thành phẩm: Gói Kẹo Trị Ho Thảo Mộc đóng túi zip tiện lợi' },
        { src: 'AnhQuaTrinhLam/image41.jpeg', group: 'thanh-pham', tag: 'Thành phẩm hoàn thiện', caption: 'Thành phẩm: Chai Nước Xúc Miệng Thảo Mộc An Diệp Mộc (500ml)' },
        { src: 'AnhQuaTrinhLam/image42.jpeg', group: 'thanh-pham', tag: 'Thành phẩm hoàn thiện', caption: 'Thành phẩm: Túi Lọc Ngâm Chân Thảo Mộc Ngải Cứu & Gừng' },
        { src: 'AnhQuaTrinhLam/image43.jpeg', group: 'thanh-pham', tag: 'Thành phẩm hoàn thiện', caption: 'Thành phẩm: Gối Kê Cổ Thảo Mộc êm ái kèm thẻ nhãn An Diệp Mộc' }
    ];

    /* ==========================================================================
       3. STICKY HEADER, MOBILE MENU & SCROLL SPY
       ========================================================================== */
    const $window = $(window);
    const $header = $('#header');
    const $backToTop = $('#backToTop');

    $window.on('scroll', function () {
        const scrollTop = $window.scrollTop();
        if (scrollTop > 60) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }

        if (scrollTop > 500) {
            $backToTop.addClass('show');
        } else {
            $backToTop.removeClass('show');
        }

        // Active menu link on scroll
        $('section[id]').each(function () {
            const top = $(this).offset().top - 140;
            const bottom = top + $(this).outerHeight();
            const id = $(this).attr('id');
            if (scrollTop >= top && scrollTop < bottom) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${id}"]`).addClass('active');
            }
        });
    });

    $('#mobileMenuBtn').on('click', function (e) {
        e.stopPropagation();
        $('#mainNav').toggleClass('open');
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    $('.nav-link').on('click', function () {
        $('#mainNav').removeClass('open');
        $('#mobileMenuBtn').removeClass('active');
        $('#mobileMenuBtn i').removeClass('fa-xmark').addClass('fa-bars');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#mainNav, #mobileMenuBtn').length) {
            $('#mainNav').removeClass('open');
            $('#mobileMenuBtn').removeClass('active');
            $('#mobileMenuBtn i').removeClass('fa-xmark').addClass('fa-bars');
        }
    });

    $backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    /* ==========================================================================
       4. PRODUCT FILTERING & IMAGE SWITCHER (NHÃN BAO BÌ <-> ẢNH THỰC TẾ)
       ========================================================================== */
    // Filter by category
    $('#productFilterTabs .filter-btn').on('click', function () {
        const filter = $(this).data('filter');
        $('#productFilterTabs .filter-btn').removeClass('active');
        $(this).addClass('active');

        $('.product-card').each(function () {
            const cat = $(this).data('category');
            if (filter === 'all' || cat === filter) {
                $(this).stop(true, true).fadeIn(300);
            } else {
                $(this).stop(true, true).fadeOut(200);
            }
        });
    });

    // Individual Card Image Toggle (Nhãn bao bì vs Ảnh thực tế)
    $(document).on('click', '.img-toggle-pills .pill-btn', function (e) {
        e.stopPropagation();
        const target = $(this).data('target'); // 'label' or 'real'
        const $card = $(this).closest('.product-card');

        $card.find('.pill-btn').removeClass('active');
        $(this).addClass('active');

        $card.find('.product-img-container img').removeClass('active');
        if (target === 'real') {
            $card.find('.img-real').addClass('active');
        } else {
            $card.find('.img-label').addClass('active');
        }
    });

    // Global Image Mode Toggle (Switch all 6 cards at once)
    $('.view-mode-switch .mode-btn').on('click', function () {
        const mode = $(this).data('mode'); // 'label' or 'real'
        $('.view-mode-switch .mode-btn').removeClass('active');
        $(this).addClass('active');

        $('.product-card').each(function () {
            $(this).find('.pill-btn').removeClass('active');
            $(this).find(`.pill-btn[data-target="${mode}"]`).addClass('active');
            $(this).find('.product-img-container img').removeClass('active');
            if (mode === 'real') {
                $(this).find('.img-real').addClass('active');
            } else {
                $(this).find('.img-label').addClass('active');
            }
        });
    });

    /* ==========================================================================
       5. PRODUCT DETAIL MODAL
       ========================================================================== */
    function openProductDetailModal(prodId) {
        const p = PRODUCTS_DATA[prodId];
        if (!p) return;

        const benefitsHtml = p.benefits.map(b => `<li><i class="fa-solid fa-circle-check text-green"></i> ${b}</li>`).join('');

        const html = `
            <div class="modal-images-col">
                <img src="${p.labelImg}" alt="${p.name}" class="main-modal-img" id="modalMainImg">
                <div class="modal-thumbs">
                    <div class="modal-thumb-item active" data-img="${p.labelImg}">
                        <img src="${p.labelImg}" alt="Nhãn sản phẩm">
                        <span>Nhãn bao bì</span>
                    </div>
                    <div class="modal-thumb-item" data-img="${p.realImg}">
                        <img src="${p.realImg}" alt="Ảnh thực tế">
                        <span>Ảnh thực tế</span>
                    </div>
                    <div class="modal-thumb-item" data-img="${p.giftImg}">
                        <img src="${p.giftImg}" alt="Quà tặng móc khóa">
                        <span>🎁 Quà tặng kèm</span>
                    </div>
                </div>
            </div>
            <div class="modal-details-col">
                <span class="card-badge"><i class="fa-solid fa-leaf"></i> ${p.category} • ${p.volume}</span>
                <h2 style="font-family: var(--font-serif); color: var(--clr-primary-900); font-size: 1.65rem; margin-bottom: 4px;">${p.name}</h2>
                <p style="color: var(--clr-gold-700); font-style: italic; margin-bottom: 12px;">“${p.tagline}”</p>
                
                <div style="font-family: var(--font-serif); font-size: 1.65rem; font-weight: 800; color: var(--clr-primary-800); margin-bottom: 14px;">
                    ${p.priceFormatted} <small style="font-size: 0.9rem; font-family: var(--font-sans); color: var(--clr-text-muted);">/ ${p.unit} (Đã gồm 01 Móc khóa tặng kèm)</small>
                </div>

                <div style="background: var(--clr-bg-cream); padding: 12px 14px; border-radius: 10px; margin-bottom: 12px; font-size: 0.9rem;">
                    <strong><i class="fa-solid fa-seedling text-green"></i> Thành phần tự nhiên:</strong> ${p.ingredients}
                </div>

                <div style="margin-bottom: 12px;">
                    <strong style="display:block; margin-bottom: 6px; color: var(--clr-primary-900);"><i class="fa-solid fa-heart-pulse text-green"></i> Công dụng nổi bật:</strong>
                    <ul style="font-size: 0.88rem; display:flex; flex-direction:column; gap:5px;">
                        ${benefitsHtml}
                    </ul>
                </div>

                <div style="font-size: 0.88rem; margin-bottom: 10px;">
                    <strong><i class="fa-solid fa-book-medical text-green"></i> Hướng dẫn sử dụng:</strong> ${p.usage}
                </div>

                <div style="font-size: 0.86rem; margin-bottom: 12px; color: var(--clr-text-muted);">
                    <strong><i class="fa-solid fa-users"></i> Đối tượng khuyên dùng:</strong> ${p.audience}
                </div>

                <div style="background: var(--clr-gold-100); border: 1px dashed var(--clr-gold-500); padding: 10px 14px; border-radius: 10px; font-size: 0.84rem; margin-bottom: 18px;">
                    <strong><i class="fa-solid fa-gift" style="color:var(--clr-gold-700)"></i> Ưu đãi độc quyền:</strong> Tặng ngay <strong>01 Móc khóa Chibi An Diệp Mộc (5cm × 5cm)</strong> trị giá kỷ niệm khi mua sản phẩm này!
                </div>

                <div style="display:flex; gap: 12px;">
                    <button class="btn btn-primary btn-lg add-cart-btn" data-id="${p.id}" style="flex:1;">
                        <i class="fa-solid fa-cart-plus"></i> Thêm Vào Giỏ (+1 Móc Khóa)
                    </button>
                </div>
            </div>
        `;

        $('#productModalContent').html(html);
        $('#productModal').addClass('open');
    }

    $(document).on('click', '.view-detail-btn, .footer-prod-link', function (e) {
        e.preventDefault();
        const id = $(this).data('id');
        openProductDetailModal(id);
    });

    $(document).on('click', '.modal-thumb-item', function () {
        const imgSrc = $(this).data('img');
        $('.modal-thumb-item').removeClass('active');
        $(this).addClass('active');
        $('#modalMainImg').attr('src', imgSrc);
    });

    $('#closeProductModal, #productModal').on('click', function (e) {
        if (e.target === this || $(e.target).closest('#closeProductModal').length) {
            $('#productModal').removeClass('open');
        }
    });

    /* ==========================================================================
       6. RENDER THƯ VIỆN 34 ẢNH QUÁ TRÌNH LÀM (AnhQuaTrinhLam)
       ========================================================================== */
    let showAllGallery = false;
    let currentGalleryGroup = 'all';

    function renderProcessGallery() {
        const filtered = PROCESS_IMAGES.filter(item => currentGalleryGroup === 'all' || item.group === currentGalleryGroup);
        const visibleItems = (currentGalleryGroup === 'all' && !showAllGallery) ? filtered.slice(0, 12) : filtered;

        const html = visibleItems.map((item, idx) => `
            <div class="gallery-card lightbox-trigger" data-src="${item.src}" data-caption="${item.caption}">
                <img src="${item.src}" alt="${item.caption}" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-tag">${item.tag}</span>
                    <p>${item.caption}</p>
                </div>
            </div>
        `).join('');

        $('#processGalleryGrid').hide().html(html).fadeIn(300);

        if (currentGalleryGroup === 'all' && filtered.length > 12) {
            $('#toggleAllGalleryBtn').parent().show();
            if (showAllGallery) {
                $('#toggleAllGalleryBtn').html('<i class="fa-solid fa-angles-up"></i> Thu gọn thư viện ảnh');
            } else {
                $('#toggleAllGalleryBtn').html(`<i class="fa-solid fa-angles-down"></i> Xem toàn bộ ${filtered.length} ảnh quá trình làm`);
            }
        } else {
            $('#toggleAllGalleryBtn').parent().hide();
        }
    }

    renderProcessGallery();

    $('#galleryFilterBtns .g-filter').on('click', function () {
        $('#galleryFilterBtns .g-filter').removeClass('active');
        $(this).addClass('active');
        currentGalleryGroup = $(this).data('group');
        renderProcessGallery();
    });

    $('#toggleAllGalleryBtn').on('click', function () {
        showAllGallery = !showAllGallery;
        renderProcessGallery();
    });

    /* ==========================================================================
       7. LIGHTBOX XEM ẢNH PHÓNG TO (QUÁ TRÌNH LÀM, MÓC KHÓA, KIỂM ĐỊNH)
       ========================================================================== */
    let currentLightboxList = [];
    let currentLightboxIndex = 0;

    $(document).on('click', '.lightbox-trigger', function () {
        const src = $(this).data('src') || $(this).attr('src');
        const caption = $(this).data('caption') || $(this).attr('alt') || '';

        // Build list of all currently visible lightbox triggers for Next/Prev
        currentLightboxList = [];
        $('.lightbox-trigger:visible').each(function () {
            const itemSrc = $(this).data('src') || $(this).attr('src');
            const itemCap = $(this).data('caption') || $(this).attr('alt') || '';
            currentLightboxList.push({ src: itemSrc, caption: itemCap });
        });

        currentLightboxIndex = currentLightboxList.findIndex(x => x.src === src);
        if (currentLightboxIndex === -1) {
            currentLightboxList = [{ src, caption }];
            currentLightboxIndex = 0;
        }

        updateLightboxView();
        $('#lightboxModal').addClass('open');
    });

    function updateLightboxView() {
        const item = currentLightboxList[currentLightboxIndex];
        if (!item) return;
        $('#lightboxImg').attr('src', item.src);
        $('#lightboxCaption').text(item.caption);
    }

    $('#prevLightbox').on('click', function (e) {
        e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
        updateLightboxView();
    });

    $('#nextLightbox').on('click', function (e) {
        e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
        updateLightboxView();
    });

    $('#closeLightbox, #lightboxModal').on('click', function (e) {
        if (e.target === this || $(e.target).closest('#closeLightbox').length) {
            $('#lightboxModal').removeClass('open');
        }
    });

    $(document).on('keydown', function (e) {
        if ($('#lightboxModal').hasClass('open')) {
            if (e.key === 'Escape') $('#lightboxModal').removeClass('open');
            if (e.key === 'ArrowLeft') $('#prevLightbox').trigger('click');
            if (e.key === 'ArrowRight') $('#nextLightbox').trigger('click');
        }
    });

    /* ==========================================================================
       8. GIỎ HÀNG THÔNG MINH (1 SẢN PHẨM = TẶNG 1 MÓC KHÓA MIỄN PHÍ)
       ========================================================================== */
    let cart = [];

    function formatVND(amount) {
        return amount.toLocaleString('vi-VN') + 'đ';
    }

    function showToast(message) {
        const $toast = $(`
            <div class="toast-msg">
                <i class="fa-solid fa-gift" style="color: var(--clr-gold-300); font-size: 1.2rem;"></i>
                <div>${message}</div>
            </div>
        `);
        $('#toastContainer').append($toast);
        setTimeout(() => {
            $toast.fadeOut(300, function () { $(this).remove(); });
        }, 3500);
    }

    function renderCart() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

        $('#cartCount').text(totalItems);
        $('#freeKeychainCount').text(totalItems);
        $('#cartGiftTotal').text(`${totalItems} chiếc Móc khóa 5cm×5cm (Miễn phí 0đ)`);
        $('#cartTotalPrice').text(formatVND(totalPrice));

        if (cart.length === 0) {
            $('#cartItemsList').html(`
                <div style="text-align:center; padding: 48px 16px; color: var(--clr-text-muted);">
                    <i class="fa-solid fa-basket-shopping" style="font-size: 2.8rem; opacity: 0.35; margin-bottom: 12px;"></i>
                    <p>Giỏ hàng của bạn đang trống.</p>
                    <small>Hãy chọn sản phẩm để nhận ngay Móc khóa Chibi tặng kèm nhé!</small>
                </div>
            `);
            return;
        }

        const html = cart.map(item => `
            <div class="cart-item">
                <img src="${item.labelImg}" alt="${item.name}">
                <div class="ci-info">
                    <h4>${item.name}</h4>
                    <span class="ci-price">${formatVND(item.price)} × ${item.qty} = ${formatVND(item.price * item.qty)}</span>
                    <span class="ci-gift-tag"><i class="fa-solid fa-gift"></i> Tặng kèm ${item.qty} Móc khóa An Diệp Mộc</span>
                </div>
                <div class="ci-qty-ctrl">
                    <button class="qty-btn" data-action="dec" data-id="${item.id}">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        $('#cartItemsList').html(html);
    }

    renderCart();

    $(document).on('click', '.add-cart-btn', function () {
        const id = $(this).data('id');
        const prod = PRODUCTS_DATA[id];
        if (!prod) return;

        const existing = cart.find(x => x.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({
                id: prod.id,
                name: prod.name,
                price: prod.price,
                labelImg: prod.labelImg,
                qty: 1
            });
        }

        renderCart();
        $('#productModal').removeClass('open');
        showToast(`Đã thêm <strong>${prod.name}</strong> + <strong>01 Móc khóa tặng kèm</strong> vào giỏ hàng!`);
    });

    $(document).on('click', '.qty-btn', function () {
        const id = $(this).data('id');
        const action = $(this).data('action');
        const item = cart.find(x => x.id === id);
        if (!item) return;

        if (action === 'inc') {
            item.qty += 1;
        } else {
            item.qty -= 1;
            if (item.qty <= 0) {
                cart = cart.filter(x => x.id !== id);
            }
        }
        renderCart();
    });

    $('#openCartBtn').on('click', function () {
        $('#cartOverlay, #cartDrawer').addClass('open');
    });

    $('#closeCartBtn, #cartOverlay').on('click', function () {
        $('#cartOverlay, #cartDrawer').removeClass('open');
    });

    $('#checkoutCartBtn').on('click', function () {
        $('#cartOverlay, #cartDrawer').removeClass('open');
        if (cart.length > 0) {
            const totalQty = cart.reduce((s, i) => s + i.qty, 0);
            const totalMoney = cart.reduce((s, i) => s + i.qty * i.price, 0);
            const summary = cart.map(i => `${i.name} (SL: ${i.qty})`).join(', ');
            const keychainChoice = $('#cartKeychainStyle').val();

            $('#custAddress').val(`Đặt hàng từ Giỏ hàng: ${summary} | Tổng tiền: ${formatVND(totalMoney)} | Quà tặng: ${totalQty} Móc khóa (${keychainChoice}).\nĐịa chỉ nhận hàng: `);
        }
        $('html, body').animate({
            scrollTop: $('#lien-he').offset().top - 80
        }, 600);
        $('#custName').trigger('focus');
    });

    /* ==========================================================================
       9. XỬ LÝ FORM ĐẶT HÀNG NHANH
       ========================================================================== */
    $('#quickOrderForm').on('submit', function (e) {
        e.preventDefault();
        const name = $('#custName').val().trim();
        const phone = $('#custPhone').val().trim();
        const product = $('#custProduct').val();
        const gift = $('#custGiftChoice').val();

        showToast(`Cảm ơn <strong>${name}</strong> (${phone})! Đơn đặt hàng <em>${product}</em> kèm quà tặng <strong>${gift}</strong> đã được ghi nhận!`);
        this.reset();
        cart = [];
        renderCart();
    });

});

