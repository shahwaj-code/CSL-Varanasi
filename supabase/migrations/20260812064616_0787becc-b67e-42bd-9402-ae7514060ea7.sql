DROP POLICY "Published posts are public" ON public.blog_posts;
CREATE POLICY "Anon reads published posts" ON public.blog_posts
  FOR SELECT TO anon USING (published);
CREATE POLICY "Signed-in reads posts" ON public.blog_posts
  FOR SELECT TO authenticated USING (published OR public.has_role(auth.uid(), 'admin'));

DROP POLICY "Published testimonials are public" ON public.testimonials;
CREATE POLICY "Anon reads published testimonials" ON public.testimonials
  FOR SELECT TO anon USING (published);
CREATE POLICY "Signed-in reads testimonials" ON public.testimonials
  FOR SELECT TO authenticated USING (published OR public.has_role(auth.uid(), 'admin'));

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;