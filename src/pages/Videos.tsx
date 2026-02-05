 import { motion } from "framer-motion";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import { Youtube, Play } from "lucide-react";
 
 // Featured playlists from Pratik Jain Vlogs channel
 const playlists = [
   {
     id: "PLExample1",
     title: "Ladakh Series",
     description: "Epic motorcycle journey through the Himalayas",
     embedId: "videoseries?list=PLExample1",
   },
   {
     id: "PLExample2", 
     title: "Kerala Backwaters",
     description: "Exploring God's own country",
     embedId: "videoseries?list=PLExample2",
   },
   {
     id: "PLExample3",
     title: "Rajasthan Diaries",
     description: "Desert adventures and royal heritage",
     embedId: "videoseries?list=PLExample3",
   },
 ];
 
 // Featured individual videos
 const featuredVideos = [
   {
     id: "1",
     title: "Latest Vlog",
     videoId: "dQw4w9WgXcQ", // Replace with actual video ID
   },
   {
     id: "2",
     title: "Most Popular",
     videoId: "dQw4w9WgXcQ", // Replace with actual video ID
   },
   {
     id: "3",
     title: "Travel Tips",
     videoId: "dQw4w9WgXcQ", // Replace with actual video ID
   },
 ];
 
 const Videos = () => {
   return (
     <div className="min-h-screen bg-background">
       <Navbar />
 
       {/* Hero Section */}
       <section className="pt-24 lg:pt-32 pb-16 bg-gradient-deep">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center max-w-3xl mx-auto"
           >
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
               <Youtube className="w-5 h-5 text-primary-foreground" />
               <span className="text-primary-foreground font-medium">@pratikjainvlogs</span>
             </div>
             <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
               Watch the Adventures
             </h1>
             <p className="text-xl text-primary-foreground/80">
               Catch all the vlogs, travel series, and behind-the-scenes content from my journeys across India.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Featured Videos */}
       <section className="py-16 lg:py-24">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <span className="text-primary font-medium">Latest & Greatest</span>
             <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
               Featured Videos
             </h2>
           </motion.div>
 
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {featuredVideos.map((video, index) => (
               <motion.div
                 key={video.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="relative aspect-video rounded-xl overflow-hidden shadow-elevated bg-muted">
                   <iframe
                     src={`https://www.youtube.com/embed/${video.videoId}`}
                     title={video.title}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     className="w-full h-full"
                   />
                 </div>
                 <h3 className="font-serif text-lg font-semibold text-foreground mt-4">
                   {video.title}
                 </h3>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Channel Embed */}
       <section className="py-16 lg:py-24 bg-muted/50">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <span className="text-primary font-medium">Full Channel</span>
             <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
               Browse All Videos
             </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               Explore the complete collection of travel vlogs, tips, and adventures on YouTube.
             </p>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
           >
             <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated bg-card">
               <iframe
                 src="https://www.youtube.com/embed?listType=user_uploads&list=pratikjainvlogs"
                 title="Pratik Jain Vlogs Channel"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 className="w-full h-full"
               />
             </div>
           </motion.div>
 
           {/* Subscribe CTA */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mt-12"
           >
             <a
               href="https://youtube.com/@pratikjainvlogs?sub_confirmation=1"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 bg-destructive text-destructive-foreground font-semibold rounded-xl hover:bg-destructive/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
             >
               <Youtube className="w-6 h-6" />
               Subscribe on YouTube
             </a>
           </motion.div>
         </div>
       </section>
 
       {/* Playlists Section */}
       <section className="py-16 lg:py-24">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <span className="text-primary font-medium">Curated Series</span>
             <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
               Travel Playlists
             </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               Binge-watch complete travel series organized by destination.
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {playlists.map((playlist, index) => (
               <motion.div
                 key={playlist.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="relative bg-card rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-all">
                   <div className="aspect-video bg-gradient-ocean flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                     </div>
                   </div>
                   <div className="p-6">
                     <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                       {playlist.title}
                     </h3>
                     <p className="text-muted-foreground text-sm">
                       {playlist.description}
                     </p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default Videos;