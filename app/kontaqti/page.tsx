function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">კონტაქტი</h1>
      <div className="w-full max-w-4xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.3963923670344!2d44.70814517603852!3d41.927332922767434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404467264f98a231%3A0x30487cc9c7b8572d!2z4YOU4YOV4YOg4YOd4YOe4YOj4YOa4YOYIOGDqeGDmOGDl-GDmOGDmuGDlOGDkeGDmA!5e0!3m2!1ska!2sGE!4v1741378383317!5m2!1ska!2sGE"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Page;

