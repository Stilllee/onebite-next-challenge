import Modal from "@/app/components/Modal";
import MoviePage from "@/app/movie/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
