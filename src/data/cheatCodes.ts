import { CheatCode } from '../types';

export const htmlCheatCodes: CheatCode[] = [
  {
    id: 'html-text-formatting',
    title: 'Text Formatting',
    titleBangla: 'টেক্সট ফরম্যাটিং',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>টেক্সট ফরম্যাটিং</title>
</head>
<body>
    <h2>টেক্সট ফরম্যাটিং উদাহরণ</h2>
    
    <p><b>বোল্ড টেক্সট</b> - গুরুত্বপূর্ণ লেখা</p>
    <p><strong>স্ট্রং টেক্সট</strong> - অধিক গুরুত্বপূর্ণ</p>
    <p><i>ইটালিক টেক্সট</i> - তির্যক লেখা</p>
    <p><em>এমফেসিস টেক্সট</em> - জোর দেওয়া লেখা</p>
    <p><u>আন্ডারলাইন টেক্সট</u> - দাগ দেওয়া লেখা</p>
    <p><big>বড় টেক্সট</big> - আকারে বড়</p>
    <p><small>ছোট টেক্সট</small> - আকারে ছোট</p>
    <p>সাধারণ টেক্সট <sub>সাবস্ক্রিপ্ট</sub> - নিচের দিকে</p>
    <p>সাধারণ টেক্সট <sup>সুপারস্ক্রিপ্ট</sup> - উপরের দিকে</p>
    <p><ins>নতুন যোগ করা টেক্সট</ins> - সন্নিবেশিত</p>
    <p><del>মুছে ফেলা টেক্সট</del> - বাতিল করা</p>
</body>
</html>`,
    description: 'All HTML text formatting tags with examples',
    descriptionBangla: 'সকল HTML টেক্সট ফরম্যাটিং ট্যাগের উদাহরণ'
  },
  {
    id: 'html-ordered-lists',
    title: 'Ordered Lists',
    titleBangla: 'ক্রমিক তালিকা',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>ক্রমিক তালিকা</title>
</head>
<body>
    <h2>বিভিন্ন ধরনের ক্রমিক তালিকা</h2>
    
    <!-- সংখ্যা দিয়ে -->
    <h3>সংখ্যা দিয়ে (1, 2, 3...)</h3>
    <ol type="1">
        <li>প্রথম আইটেম</li>
        <li>দ্বিতীয় আইটেম</li>
        <li>তৃতীয় আইটেম</li>
    </ol>
    
    <!-- রোমান সংখ্যা (বড় হাতের) -->
    <h3>রোমান সংখ্যা (I, II, III...)</h3>
    <ol type="I">
        <li>প্রথম পয়েন্ট</li>
        <li>দ্বিতীয় পয়েন্ট</li>
        <li>তৃতীয় পয়েন্ট</li>
    </ol>
    
    <!-- রোমান সংখ্যা (ছোট হাতের) -->
    <h3>রোমান সংখ্যা (i, ii, iii...)</h3>
    <ol type="i">
        <li>প্রথম বিষয়</li>
        <li>দ্বিতীয় বিষয়</li>
        <li>তৃতীয় বিষয়</li>
    </ol>
    
    <!-- ইংরেজি বড় হাতের অক্ষর -->
    <h3>ইংরেজি বড় হাতের অক্ষর (A, B, C...)</h3>
    <ol type="A">
        <li>প্রথম অধ্যায়</li>
        <li>দ্বিতীয় অধ্যায়</li>
        <li>তৃতীয় অধ্যায়</li>
    </ol>
    
    <!-- ইংরেজি ছোট হাতের অক্ষর -->
    <h3>ইংরেজি ছোট হাতের অক্ষর (a, b, c...)</h3>
    <ol type="a">
        <li>প্রথম উপবিভাগ</li>
        <li>দ্বিতীয় উপবিভাগ</li>
        <li>তৃতীয় উপবিভাগ</li>
    </ol>
</body>
</html>`,
    description: 'Different types of ordered lists with various numbering styles',
    descriptionBangla: 'বিভিন্ন ধরনের ক্রমিক তালিকা ও নাম্বারিং স্টাইল'
  },
  {
    id: 'html-unordered-lists',
    title: 'Unordered Lists',
    titleBangla: 'অক্রমিক তালিকা',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>অক্রমিক তালিকা</title>
</head>
<body>
    <h2>বিভিন্ন ধরনের অক্রমিক তালিকা</h2>
    
    <!-- ডিস্ক বুলেট -->
    <h3>ডিস্ক বুলেট (•)</h3>
    <ul type="disc">
        <li>আপেল</li>
        <li>আম</li>
        <li>কমলা</li>
    </ul>
    
    <!-- সার্কেল বুলেট -->
    <h3>সার্কেল বুলেট (○)</h3>
    <ul type="circle">
        <li>গোলাপ</li>
        <li>বেলি</li>
        <li>চামেলি</li>
    </ul>
    
    <!-- স্কয়ার বুলেট -->
    <h3>স্কয়ার বুলেট (■)</h3>
    <ul type="square">
        <li>ভাত</li>
        <li>মাছ</li>
        <li>ডাল</li>
    </ul>
    
    <!-- নেস্টেড লিস্ট -->
    <h3>নেস্টেড তালিকা</h3>
    <ul>
        <li>প্রাণী
            <ul type="circle">
                <li>স্তন্যপায়ী
                    <ul type="square">
                        <li>গরু</li>
                        <li>ছাগল</li>
                    </ul>
                </li>
                <li>পাখি
                    <ul type="square">
                        <li>কাক</li>
                        <li>কবুতর</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>উদ্ভিদ
            <ul type="circle">
                <li>ফুল</li>
                <li>ফল</li>
            </ul>
        </li>
    </ul>
</body>
</html>`,
    description: 'Different types of unordered lists with various bullet styles and nested lists',
    descriptionBangla: 'বিভিন্ন ধরনের অক্রমিক তালিকা ও নেস্টেড তালিকা'
  },
  {
    id: 'html-table-advanced',
    title: 'Advanced Table',
    titleBangla: 'উন্নত টেবিল',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>উন্নত টেবিল</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .center { text-align: center; }
    </style>
</head>
<body>
    <h2>ছাত্রছাত্রীদের ফলাফল</h2>
    
    <table>
        <caption>HSC পরীক্ষার ফলাফল - ২০২৪</caption>
        <thead>
            <tr>
                <th rowspan="2">রোল নং</th>
                <th rowspan="2">নাম</th>
                <th colspan="4">বিষয়</th>
                <th rowspan="2">মোট</th>
                <th rowspan="2">গ্রেড</th>
            </tr>
            <tr>
                <th>ICT</th>
                <th>গণিত</th>
                <th>পদার্থ</th>
                <th>রসায়ন</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="center">১০১</td>
                <td>রহিম উদ্দিন</td>
                <td class="center">৮৫</td>
                <td class="center">৯০</td>
                <td class="center">৮৮</td>
                <td class="center">৮৪</td>
                <td class="center">৩৪৭</td>
                <td class="center">A+</td>
            </tr>
            <tr>
                <td class="center">১০২</td>
                <td>করিম আহমেদ</td>
                <td class="center">৯২</td>
                <td class="center">৮৮</td>
                <td class="center">৮৯</td>
                <td class="center">৮৬</td>
                <td class="center">৩৫৫</td>
                <td class="center">A+</td>
            </tr>
            <tr>
                <td class="center">১০৩</td>
                <td>ফাতিমা খাতুন</td>
                <td class="center">৯৫</td>
                <td class="center">৯৩</td>
                <td class="center">৯১</td>
                <td class="center">৮৯</td>
                <td class="center">৩৬৮</td>
                <td class="center">A+</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"><strong>গড়</strong></td>
                <td class="center"><strong>৯০.৭</strong></td>
                <td class="center"><strong>৯০.৩</strong></td>
                <td class="center"><strong>৮৯.৩</strong></td>
                <td class="center"><strong>৮৬.৩</strong></td>
                <td class="center"><strong>৩৫৬.৭</strong></td>
                <td class="center"><strong>A+</strong></td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,
    description: 'Advanced table with colspan, rowspan, caption, thead, tbody, tfoot',
    descriptionBangla: 'colspan, rowspan, caption সহ উন্নত টেবিল'
  },
  {
    id: 'html-form-complete',
    title: 'Complete Form',
    titleBangla: 'সম্পূর্ণ ফর্ম',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>সম্পূর্ণ ফর্ম</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background-color: #45a049; }
        .radio-group, .checkbox-group { display: flex; gap: 15px; }
        .radio-group label, .checkbox-group label { display: flex; align-items: center; }
        .radio-group input, .checkbox-group input { width: auto; margin-right: 5px; }
    </style>
</head>
<body>
    <h2>HSC ভর্তি আবেদন ফর্ম</h2>
    
    <form action="#" method="post">
        <!-- টেক্সট ইনপুট -->
        <div class="form-group">
            <label for="name">পূর্ণ নাম:</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <!-- ইমেইল ইনপুট -->
        <div class="form-group">
            <label for="email">ইমেইল:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <!-- পাসওয়ার্ড ইনপুট -->
        <div class="form-group">
            <label for="password">পাসওয়ার্ড:</label>
            <input type="password" id="password" name="password" required>
        </div>
        
        <!-- নাম্বার ইনপুট -->
        <div class="form-group">
            <label for="age">বয়স:</label>
            <input type="number" id="age" name="age" min="16" max="25" required>
        </div>
        
        <!-- ডেট ইনপুট -->
        <div class="form-group">
            <label for="birthdate">জন্ম তারিখ:</label>
            <input type="date" id="birthdate" name="birthdate" required>
        </div>
        
        <!-- রেডিও বাটন -->
        <div class="form-group">
            <label>লিঙ্গ:</label>
            <div class="radio-group">
                <label><input type="radio" name="gender" value="male" required> পুরুষ</label>
                <label><input type="radio" name="gender" value="female" required> মহিলা</label>
            </div>
        </div>
        
        <!-- চেকবক্স -->
        <div class="form-group">
            <label>আগ্রহের বিষয়:</label>
            <div class="checkbox-group">
                <label><input type="checkbox" name="subjects" value="ict"> ICT</label>
                <label><input type="checkbox" name="subjects" value="math"> গণিত</label>
                <label><input type="checkbox" name="subjects" value="physics"> পদার্থবিজ্ঞান</label>
                <label><input type="checkbox" name="subjects" value="chemistry"> রসায়ন</label>
            </div>
        </div>
        
        <!-- সিলেক্ট ড্রপডাউন -->
        <div class="form-group">
            <label for="division">বিভাগ:</label>
            <select id="division" name="division" required>
                <option value="">-- বিভাগ নির্বাচন করুন --</option>
                <option value="dhaka">ঢাকা</option>
                <option value="chittagong">চট্টগ্রাম</option>
                <option value="rajshahi">রাজশাহী</option>
                <option value="khulna">খুলনা</option>
                <option value="barisal">বরিশাল</option>
                <option value="sylhet">সিলেট</option>
                <option value="rangpur">রংপুর</option>
                <option value="mymensingh">ময়মনসিংহ</option>
            </select>
        </div>
        
        <!-- ফাইল ইনপুট -->
        <div class="form-group">
            <label for="photo">ছবি আপলোড:</label>
            <input type="file" id="photo" name="photo" accept="image/*">
        </div>
        
        <!-- টেক্সট এরিয়া -->
        <div class="form-group">
            <label for="address">ঠিকানা:</label>
            <textarea id="address" name="address" rows="4" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"></textarea>
        </div>
        
        <!-- হিডেন ইনপুট -->
        <input type="hidden" name="form_type" value="admission">
        
        <!-- সাবমিট বাটন -->
        <div class="form-group">
            <button type="submit">আবেদন জমা দিন</button>
            <button type="reset" style="background-color: #f44336; margin-left: 10px;">রিসেট করুন</button>
        </div>
    </form>
</body>
</html>`,
    description: 'Complete form with all input types and styling',
    descriptionBangla: 'সকল ধরনের ইনপুট সহ সম্পূর্ণ ফর্ম'
  },
  {
    id: 'html-basic',
    title: 'Basic HTML Structure',
    titleBangla: 'মূল HTML কাঠামো',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>আমার ওয়েবসাইট</title>
</head>
<body>
    <h1>স্বাগতম</h1>
    <p>এটি একটি নমুনা প্যারাগ্রাফ।</p>
</body>
</html>`,
    description: 'Basic HTML document structure with proper tags',
    descriptionBangla: 'সঠিক ট্যাগ সহ মূল HTML ডকুমেন্টের কাঠামো'
  },
  {
    id: 'html-headings',
    title: 'Headings',
    titleBangla: 'শিরোনাম',
    code: `<h1>প্রধান শিরোনাম</h1>
<h2>উপ-শিরোনাম</h2>
<h3>ছোট শিরোনাম</h3>
<h4>আরও ছোট শিরোনাম</h4>
<h5>ক্ষুদ্র শিরোনাম</h5>
<h6>সবচেয়ে ছোট শিরোনাম</h6>`,
    description: 'Different heading levels from H1 to H6',
    descriptionBangla: 'H1 থেকে H6 পর্যন্ত বিভিন্ন স্তরের শিরোনাম'
  },
  {
    id: 'html-table',
    title: 'Table',
    titleBangla: 'টেবিল',
    code: `<table border="1">
    <thead>
        <tr>
            <th>নাম</th>
            <th>বয়স</th>
            <th>শহর</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>রহিম</td>
            <td>১৮</td>
            <td>ঢাকা</td>
        </tr>
        <tr>
            <td>করিম</td>
            <td>১৯</td>
            <td>চট্টগ্রাম</td>
        </tr>
    </tbody>
</table>`,
    description: 'HTML table with headers and data rows',
    descriptionBangla: 'হেডার এবং ডেটা সারি সহ HTML টেবিল'
  },
  {
    id: 'html-form',
    title: 'Form',
    titleBangla: 'ফর্ম',
    code: `<form>
    <label for="name">নাম:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">ইমেইল:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="age">বয়স:</label>
    <input type="number" id="age" name="age" min="1" max="100">
    
    <label for="message">বার্তা:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <button type="submit">জমা দিন</button>
</form>`,
    description: 'HTML form with various input types',
    descriptionBangla: 'বিভিন্ন ইনপুট টাইপ সহ HTML ফর্ম'
  },
  {
    id: 'html-list',
    title: 'Lists',
    titleBangla: 'তালিকা',
    code: `<!-- ক্রমিক তালিকা -->
<ol>
    <li>প্রথম আইটেম</li>
    <li>দ্বিতীয় আইটেম</li>
    <li>তৃতীয় আইটেম</li>
</ol>

<!-- অক্রমিক তালিকা -->
<ul>
    <li>আপেল</li>
    <li>আম</li>
    <li>কমলা</li>
</ul>`,
    description: 'Ordered and unordered lists',
    descriptionBangla: 'ক্রমিক এবং অক্রমিক তালিকা'
  }
];

export const cCheatCodes: CheatCode[] = [
  {
    id: 'c-hello',
    title: 'Hello World',
    titleBangla: 'হ্যালো ওয়ার্ল্ড',
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    description: 'Simple Hello World program in C',
    descriptionBangla: 'C ভাষায় সহজ হ্যালো ওয়ার্ল্ড প্রোগ্রাম',
    algorithm: [
      'শুরু',
      'stdio.h হেডার ফাইল অন্তর্ভুক্ত করো',
      'main() ফাংশন শুরু করো',
      '"Hello, World!" প্রিন্ট করো',
      '0 রিটার্ন করো',
      'শেষ'
    ],
    flowchart: [
      { type: 'start', text: 'Start', textBangla: 'শুরু' },
      { type: 'process', text: 'Include stdio.h', textBangla: 'stdio.h অন্তর্ভুক্ত করো' },
      { type: 'output', text: 'Print "Hello, World!"', textBangla: '"Hello, World!" প্রিন্ট করো' },
      { type: 'end', text: 'End', textBangla: 'শেষ' }
    ]
  },
  {
    id: 'c-variables',
    title: 'Variables',
    titleBangla: 'চলক',
    code: `#include <stdio.h>

int main() {
    int age = 18;
    float height = 5.8;
    char grade = 'A';
    
    printf("বয়স: %d\\n", age);
    printf("উচ্চতা: %.1f\\n", height);
    printf("গ্রেড: %c\\n", grade);
    
    return 0;
}`,
    description: 'Different data types and variables',
    descriptionBangla: 'বিভিন্ন ডেটা টাইপ এবং চলক',
    algorithm: [
      'শুরু',
      'int, float, char টাইপের চলক ঘোষণা করো',
      'চলকগুলোতে মান সংরক্ষণ করো',
      'চলকগুলোর মান প্রিন্ট করো',
      'শেষ'
    ],
    flowchart: [
      { type: 'start', text: 'Start', textBangla: 'শুরু' },
      { type: 'process', text: 'Declare variables', textBangla: 'চলক ঘোষণা করো' },
      { type: 'process', text: 'Assign values', textBangla: 'মান সংরক্ষণ করো' },
      { type: 'output', text: 'Print values', textBangla: 'মান প্রিন্ট করো' },
      { type: 'end', text: 'End', textBangla: 'শেষ' }
    ]
  },
  {
    id: 'c-input',
    title: 'Input/Output',
    titleBangla: 'ইনপুট/আউটপুট',
    code: `#include <stdio.h>

int main() {
    int num1, num2, sum;
    
    printf("প্রথম সংখ্যা লিখুন: ");
    scanf("%d", &num1);
    
    printf("দ্বিতীয় সংখ্যা লিখুন: ");
    scanf("%d", &num2);
    
    sum = num1 + num2;
    
    printf("যোগফল: %d\\n", sum);
    
    return 0;
}`,
    description: 'Taking input and showing output',
    descriptionBangla: 'ইনপুট নেওয়া এবং আউটপুট দেখানো',
    algorithm: [
      'শুরু',
      'তিনটি integer চলক ঘোষণা করো',
      'ব্যবহারকারীর কাছ থেকে প্রথম সংখ্যা নাও',
      'ব্যবহারকারীর কাছ থেকে দ্বিতীয় সংখ্যা নাও',
      'দুই সংখ্যা যোগ করো',
      'যোগফল প্রিন্ট করো',
      'শেষ'
    ],
    flowchart: [
      { type: 'start', text: 'Start', textBangla: 'শুরু' },
      { type: 'process', text: 'Declare variables', textBangla: 'চলক ঘোষণা করো' },
      { type: 'input', text: 'Input first number', textBangla: 'প্রথম সংখ্যা নাও' },
      { type: 'input', text: 'Input second number', textBangla: 'দ্বিতীয় সংখ্যা নাও' },
      { type: 'process', text: 'Calculate sum', textBangla: 'যোগফল বের করো' },
      { type: 'output', text: 'Print sum', textBangla: 'যোগফল প্রিন্ট করো' },
      { type: 'end', text: 'End', textBangla: 'শেষ' }
    ]
  },
  {
    id: 'c-if-else',
    title: 'If-Else Statement',
    titleBangla: 'শর্তাধীন বিবৃতি',
    code: `#include <stdio.h>

int main() {
    int marks;
    
    printf("নম্বর লিখুন: ");
    scanf("%d", &marks);
    
    if (marks >= 80) {
        printf("গ্রেড: A+\\n");
    } else if (marks >= 70) {
        printf("গ্রেড: A\\n");
    } else if (marks >= 60) {
        printf("গ্রেড: B\\n");
    } else if (marks >= 50) {
        printf("গ্রেড: C\\n");
    } else {
        printf("গ্রেড: F\\n");
    }
    
    return 0;
}`,
    description: 'Conditional statements for grade calculation',
    descriptionBangla: 'গ্রেড নির্ণয়ের জন্য শর্তাধীন বিবৃতি',
    algorithm: [
      'শুরু',
      'marks চলক ঘোষণা করো',
      'ব্যবহারকারীর কাছ থেকে নম্বর নাও',
      'যদি নম্বর >= 80 তাহলে A+ প্রিন্ট করো',
      'নতুবা যদি নম্বর >= 70 তাহলে A প্রিন্ট করো',
      'নতুবা যদি নম্বর >= 60 তাহলে B প্রিন্ট করো',
      'নতুবা যদি নম্বর >= 50 তাহলে C প্রিন্ট করো',
      'নতুবা F প্রিন্ট করো',
      'শেষ'
    ],
    flowchart: [
      { type: 'start', text: 'Start', textBangla: 'শুরু' },
      { type: 'input', text: 'Input marks', textBangla: 'নম্বর নাও' },
      { type: 'decision', text: 'marks >= 80?', textBangla: 'নম্বর >= 80?' },
      { type: 'output', text: 'Print Grade', textBangla: 'গ্রেড প্রিন্ট করো' },
      { type: 'end', text: 'End', textBangla: 'শেষ' }
    ]
  },
  {
    id: 'c-loop',
    title: 'For Loop',
    titleBangla: 'লুপ',
    code: `#include <stdio.h>

int main() {
    int i, n = 10;
    
    printf("১ থেকে %d পর্যন্ত সংখ্যাগুলো:\\n", n);
    
    for (i = 1; i <= n; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`,
    description: 'For loop to print numbers from 1 to 10',
    descriptionBangla: '১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করার জন্য লুপ',
    algorithm: [
      'শুরু',
      'i এবং n চলক ঘোষণা করো',
      'n = 10 সেট করো',
      'i = 1 থেকে শুরু করো',
      'যতক্ষণ i <= n ততক্ষণ',
      '  i প্রিন্ট করো',
      '  i এর মান 1 বৃদ্ধি করো',
      'শেষ'
    ],
    flowchart: [
      { type: 'start', text: 'Start', textBangla: 'শুরু' },
      { type: 'process', text: 'Initialize i=1, n=10', textBangla: 'i=1, n=10 সেট করো' },
      { type: 'decision', text: 'i <= n?', textBangla: 'i <= n?' },
      { type: 'output', text: 'Print i', textBangla: 'i প্রিন্ট করো' },
      { type: 'process', text: 'i++', textBangla: 'i বৃদ্ধি করো' },
      { type: 'end', text: 'End', textBangla: 'শেষ' }
    ]
  }
];
