import React from "react";
import { Modal, Typography, Collapse } from "antd";

const { Text } = Typography;
const { Panel } = Collapse;

interface RuangLingkupDetail {
  skala: string;
  luasLahan: string;
  risiko: string;
  perizinanBerusaha: string;
  parameter: string[];
  kewenangan: string[];
  persyaratanPerizinanBerusaha: string[];
  kewajibanPerizinanBerusaha: string[];
  jangkaWaktuPemenuhanPersyaratan: string[];
  jangkaWaktuPemenuhanKewajiban: string[];
}

interface RuangLingkup {
  uraian: string;
  ruangLingkupDetail: RuangLingkupDetail[];
  referensiPeraturan: {
    judul: string;
    uraian: string;
  };
}

interface UmkmDetail {
  parameter: string;
  kewenangan: string;
  persyaratan: string[];
  jangkaWaktuPemenuhanPersyaratan: string[];
}

interface Umkm {
  uraian: string;
  umkmDetail: UmkmDetail[];
}

interface KBLIModalDetailProps {
  visible: boolean;
  onClose: () => void;
  data: {
    judul: string;
    uraian: string;
    kode: string;
    ruangLingkup?: RuangLingkup[];
    umkm?: Umkm[];
  };
}

const KBLIModalDetail: React.FC<KBLIModalDetailProps> = ({ visible, onClose, data }) => {
  return (
    <Modal
      title="Detail KBLI"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <div className="py-5 border-y-2">
        <div className="flex">
          <div className="bg-main py-2 px-5 rounded-l-md">
            <Text className="text-white font-semibold">
              Data KBLI
            </Text>
          </div>
          <div className="bg-black py-2 px-5 rounded-r-md">
            <Text className="text-white font-semibold">
              {data.kode || "Kode tidak tersedia"}
            </Text>
          </div>
        </div>

        <div className="mt-5">
          <Text className="font-bold text-[20px]">
            {data.judul || "Judul tidak tersedia"}
          </Text>

          <Text className="mt-1 inline-block font-semibold text-justify">
            {data.uraian || "Uraian tidak tersedia"}
          </Text>
        </div>
      </div>

      <div className="my-5">
        <Text className="text-[18px] font-semibold">Ruang Lingkup</Text>
        <Collapse accordion className="my-2">
          {/* Render ruangLingkup data */}
          {data.ruangLingkup?.map((item, index) => (
            <Panel header={`${item.uraian || "Uraian tidak tersedia"}`} key={`ruangLingkup-${index}`}>
              {item.ruangLingkupDetail.map((detail, detailIndex) => (
                <div key={`ruangLingkupDetail-${detailIndex}`} className="border-b-2 p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <Text strong>Skala</Text>
                    </div>
                    <div className="col-span-2">: {detail.skala || "Tidak tersedia"}</div>

                    <div className="col-span-1">
                      <Text strong>Luas Lahan</Text>
                    </div>
                    <div className="col-span-2">: {detail.luasLahan || "Tidak tersedia"}</div>

                    <div className="col-span-1">
                      <Text strong>Risiko</Text>
                    </div>
                    <div className="col-span-2">: {detail.risiko || "Tidak tersedia"}</div>

                    <div className="col-span-1">
                      <Text strong>Perizinan Berusaha</Text>
                    </div>
                    <div className="col-span-2">: {detail.perizinanBerusaha || "Tidak tersedia"}</div>

                    <div className="col-span-1">
                      <Text strong>Parameter</Text>
                    </div>
                    <div className="col-span-2 flex">
                      <span>:</span>
                      <div className="ml-2">
                        {detail.parameter.length > 0 ? detail.parameter.map((param, i) => (
                          <div key={i}>{i + 1}. {param}</div>
                        )) : "Tidak tersedia"}
                      </div>
                    </div>

                    <div className="col-span-1">
                      <Text strong>Kewenangan</Text>
                    </div>
                    <div className="col-span-2 flex">
                      <span>:</span>
                      <div className="ml-2">
                        {detail.kewenangan.length > 0 ? detail.kewenangan.map((kew, i) => (
                          <div key={i}>{i + 1}. {kew}</div>
                        )) : "Tidak tersedia"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Text strong>Persyaratan perizinan berusaha</Text>
                    <div>
                      {detail.persyaratanPerizinanBerusaha && detail.persyaratanPerizinanBerusaha.length > 0 ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: detail.persyaratanPerizinanBerusaha
                              .map((item, index) => `${index + 1}. ${item}`)
                              .join('<br/>'),
                          }}
                        />
                      ) : (
                        <Text>Tidak Ada</Text>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Text strong>Jangka waktu pemenuhan persyaratan</Text>
                    <div>
                      {detail.jangkaWaktuPemenuhanPersyaratan && detail.jangkaWaktuPemenuhanPersyaratan.length > 0 ? (
                        <div>{detail.jangkaWaktuPemenuhanPersyaratan.map((jangkaWaktu, i) => (
                          <div key={i}>
                            {i + 1}. {jangkaWaktu}
                          </div>
                        ))}
                        </div>
                      ) : (
                        <Text>Tidak Ada</Text>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Text strong>Kewajiban perizinan berusaha</Text>
                    <div>
                      {detail.kewajibanPerizinanBerusaha && detail.kewajibanPerizinanBerusaha.length > 0 ? (
                        <div>{detail.kewajibanPerizinanBerusaha.map((kewajiban, i) => (
                          <div key={i}>
                            {i + 1}. {kewajiban}
                          </div>
                        ))}
                        </div>
                      ) : (
                        <Text>Tidak Ada</Text>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Text strong>Jangka waktu pemenuhan kewajiban</Text>
                    <div>
                      {detail.jangkaWaktuPemenuhanKewajiban && detail.jangkaWaktuPemenuhanKewajiban.length > 0 ? (
                        <div>{detail.jangkaWaktuPemenuhanKewajiban.map((jangkaWaktu, i) => (
                          <div key={i}>
                            {i + 1}. {jangkaWaktu}
                          </div>
                        ))}
                        </div>
                      ) : (
                        <Text>Tidak Ada</Text>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <Text strong>Referensi Peraturan:</Text> {item.referensiPeraturan.judul || "Tidak tersedia"} - {item.referensiPeraturan.uraian || "Tidak tersedia"}
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>

      <div className="my-5">
        <Text className="text-[18px] font-semibold">PB UMKU</Text>
        {/* Render umkm data */}
        <Collapse accordion className="my-2">
          {data.umkm?.map((umkmItem, umkmIndex) => (
            <Panel header={`${umkmItem.uraian || "Uraian tidak tersedia"}`} key={`umkm-${umkmIndex}`}>
              {umkmItem.umkmDetail.map((detail, detailIndex) => (
                <div key={`umkmDetail-${detailIndex}`} style={{ marginBottom: '10px' }}>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <Text strong>Parameter</Text>
                    </div>
                    <div className="col-span-2">: {detail.parameter || "Tidak tersedia"}</div>

                    <div className="col-span-1">
                      <Text strong>Kewenangan</Text>
                    </div>
                    <div className="col-span-2">: {detail.kewenangan || "Tidak tersedia"}</div>
                  </div>

                  <div className="mt-4">
                    <Text strong>Persyaratan :</Text>
                    <div className="ml-5">
                      {detail.persyaratan && detail.persyaratan.length > 0 ? (
                        <div
                          className="mt-5"
                          dangerouslySetInnerHTML={{
                            __html: detail.persyaratan
                              .map((item) => `<span>${item}</span>`)
                              .join('<br/>'),
                          }}
                        />
                      ) : (
                        <Text>Tidak Ada</Text>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Text strong>Jangka Waktu Pemenuhan Persyaratan</Text>
                    <div>
                      {detail.jangkaWaktuPemenuhanPersyaratan && detail.jangkaWaktuPemenuhanPersyaratan.length > 0 ? (
                        <div>{detail.jangkaWaktuPemenuhanPersyaratan.map((jangkaWaktu, i) => (
                          <div key={i}>
                            {i + 1}. {jangkaWaktu}
                          </div>
                        ))}
                        </div>
                      ) : (
                        <Text>Tidak Ada</Text>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>
    </Modal>
  );
};

export default KBLIModalDetail;