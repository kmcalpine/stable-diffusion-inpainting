import { ref } from "vue";

export default function () {
	// @ts-ignore
	const files = ref<any>([]);

	function addFile(newFiles: any) {
		console.log("adding file");
		let newUploadableFiles = [...newFiles].map(
			(file) => new UploadableFile(file)
		);
		// @ts-ignore
		files.value = files.value.concat(newUploadableFiles);
		console.log(newUploadableFiles);
		console.log("file added");
	}

	return { files, addFile };
}

interface UploadableFile {
	file: any;
	id: string;
	url: any;
	status: any;
}

class UploadableFile {
	constructor(file: any) {
		this.file = file;
		this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
		this.url = URL.createObjectURL(file);
		this.status = null;
	}
}
