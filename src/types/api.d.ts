/**
 * NASA Mars Photos Rovers.
 *
 * @since 1.0.0
 */
export type ApiNasaMarsPhotosRoversRoverId = number;

export type ApiNasaMarsPhotosRoversRoverName = string;

export type ApiNasaMarsPhotosRoversRoverLandingDate = `${number}-${number}-${number}`;

export type ApiNasaMarsPhotosRoversRoverLaunchDate = `${number}-${number}-${number}`;

export type ApiNasaMarsPhotosRoversRoverStatus = 'active' | 'complete';

export type ApiNasaMarsPhotosRoversRoverMaxSol = number;

export type ApiNasaMarsPhotosRoversRoverMaxDate = `${number}-${number}-${number}`;

export type ApiNasaMarsPhotosRoversRoverTotalPhotos = number;

export type ApiNasaMarsPhotosRoversRoverCameraId = number;

export type ApiNasaMarsPhotosRoversRoverCameraName = string;

export type ApiNasaMarsPhotosRoversRoverCameraRoverId = string;

export type ApiNasaMarsPhotosRoversRoverCameraFullName = string;

export type ApiNasaMarsPhotosRoversRoverCamera = {
  id: ApiNasaMarsPhotosRoversRoverCameraId;
  name: ApiNasaMarsPhotosRoversRoverCameraName;
  rover_id: ApiNasaMarsPhotosRoversRoverCameraRoverId;
  full_name: ApiNasaMarsPhotosRoversRoverCameraFullName;
};

export type ApiNasaMarsPhotosRoversRoverCameras = ApiNasaMarsPhotosRoversRoverCamera[];

export type ApiNasaMarsPhotosRoversRover = {
  id: ApiNasaMarsPhotosRoversRoverId;
  name: ApiNasaMarsPhotosRoversRoverName;
  landing_date: ApiNasaMarsPhotosRoversRoverLandingDate;
  launch_date: ApiNasaMarsPhotosRoversRoverLaunchDate;
  status: ApiNasaMarsPhotosRoversRoverStatus;
  max_sol: ApiNasaMarsPhotosRoversRoverMaxSol;
  max_date: ApiNasaMarsPhotosRoversRoverMaxDate;
  total_photos: ApiNasaMarsPhotosRoversRoverTotalPhotos;
  cameras: ApiNasaMarsPhotosRoversRoverCameras;
};

export type ApiNasaMarsPhotosRoversRovers = ApiNasaMarsPhotosRoversRover[];

export type ApiNasaMarsPhotosRoversPhotoId = number;

export type ApiNasaMarsPhotosRoversPhotoSol = number;

export type ApiNasaMarsPhotosRoversPhotoCameraId = number;

export type ApiNasaMarsPhotosRoversPhotoCameraName = string;

export type ApiNasaMarsPhotosRoversPhotoCameraRoverId = number;

export type ApiNasaMarsPhotosRoversPhotoCameraFullName = string;

export type ApiNasaMarsPhotosRoversPhotoCamera = {
  id: ApiNasaMarsPhotosRoversPhotoCameraId;
  name: ApiNasaMarsPhotosRoversPhotoCameraName;
  rover_id: ApiNasaMarsPhotosRoversPhotoCameraRoverId;
  full_name: ApiNasaMarsPhotosRoversPhotoCameraFullName;
};

export type ApiNasaMarsPhotosRoversPhotoImgSrc = string;

export type ApiNasaMarsPhotosRoversPhotoEarthDate = `${number}-${number}-${number}`;

export type ApiNasaMarsPhotosRoversPhotoRoverId = number;

export type ApiNasaMarsPhotosRoversPhotoRoverName = string;

export type ApiNasaMarsPhotosRoversPhotoRoverLandingDate = `${number}-${number}-${number}`;

export type ApiNasaMarsPhotosRoversPhotoRoverLaunchDate = `${number}-${number}-${number}`;

export type ApiNasaMarsPhotosRoversPhotoRoverStatus = 'active' | 'complete';

export type ApiNasaMarsPhotosRoversPhotoRover = {
  id: ApiNasaMarsPhotosRoversPhotoRoverId;
  name: ApiNasaMarsPhotosRoversPhotoRoverName;
  landing_date: ApiNasaMarsPhotosRoversPhotoRoverLandingDate;
  launch_date: ApiNasaMarsPhotosRoversPhotoRoverLaunchDate;
  status: ApiNasaMarsPhotosRoversPhotoRoverStatus;
};

export type ApiNasaMarsPhotosRoversPhoto = {
  id: ApiNasaMarsPhotosRoversPhotoId;
  sol: ApiNasaMarsPhotosRoversPhotoSol;
  camera: ApiNasaMarsPhotosRoversPhotoCamera;
  img_src: ApiNasaMarsPhotosRoversPhotoImgSrc;
  earth_date: ApiNasaMarsPhotosRoversPhotoEarthDate;
  rover: ApiNasaMarsPhotosRoversPhotoRover;
};

export type ApiNasaMarsPhotosRoversPhotos = ApiNasaMarsPhotosRoversPhoto[];

export type ApiNasaMarsPhotosRoversErrorCode = string;

export type ApiNasaMarsPhotosRoversErrorMessage = string;

export type ApiNasaMarsPhotosRoversError = {
  code: ApiNasaMarsPhotosRoversErrorCode;
  message: ApiNasaMarsPhotosRoversErrorMessage;
};

export type ApiNasaMarsPhotosRovers = {
  rovers?: ApiNasaMarsPhotosRoversRovers;
  photos?: ApiNasaMarsPhotosRoversPhotos;
  error?: ApiNasaMarsPhotosRoversError;
};
