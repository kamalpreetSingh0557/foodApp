// User router wala route exact match krta hai not React wala ki  jo sbse pehle
match ho gya wo chlega

const userRouter = express.Router();

app.use('/user', userRouter);  // Base Route 
userRouter
.route('/')                    // Base Route ke baad ye wala => '/user/'
.get()
.put()
.patch()
.delete();

Jb bhi hum form ya SignUp mein submit maarte hai na to wo reload hote hain
for that not to occur ,we use event.preventDefault

Hum chahte hain ki browser pe  particular files dikhe hum ye nhi chahte ki poora
Folder dikhe.

Hum chahte hai ki jo sirf public folder mein hain wo dikhe
'static' bcz static files hain

app.use(express.static('public'));

app.use() middleware function hota hai ye har baar chlta hai jb bhi hmara server run hota hai,agr hmare kaam ka hota hai to use aa jata hai otherwise aage bd jata hai
 
app.use(404) ye hmesha last mein lgao taaki jb koi route match na ho,
kuch bhi na mile to 404 de do

Note - har request pe server waali file top-to-bottom chlti hai

app.use(express.static('public'))
loclahost: 5000 (port) pe 'public' waali file ko serve kr deta hai.
public ke andar index.html & 404.html hai but ye sirf[by default] "index.html" wali file ko hi serve krega.

Middleware Function run prior the request of after the request before resonponse goes through browser
Jitne bhi func hote hai express mein saare Middleware func hote hain , they terminate only jb response milta hai

https://www.youtube.com/watch?v=pBdWH707B0M
https://www.youtube.com/watch?v=loCLu8Iq1dQ

