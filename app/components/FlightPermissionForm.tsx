'use client';

import { useState } from 'react';
import { format } from 'date-fns';

interface FlightPlan {
    date: string;
    startTime: string;
    endTime: string;
    purpose: string;
    droneModel: string;
    pilotName: string;
    coordinates: [number, number][];
}

export function FlightPermissionForm() {
    const [flightPlan, setFlightPlan] = useState<FlightPlan>({
        date: format(new Date(), 'yyyy-MM-dd'),
        startTime: '09:00',
        endTime: '10:00',
        purpose: '',
        droneModel: '',
        pilotName: '',
        coordinates: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Flight plan submitted:', flightPlan);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" data-oid="ja9k..s">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="a23v7id">
                <div data-oid="t5rewr:">
                    <label className="block text-sm font-medium text-gray-200" data-oid="hvdsqtf">
                        飛行日
                    </label>
                    <input
                        type="date"
                        value={flightPlan.date}
                        onChange={(e) => setFlightPlan({ ...flightPlan, date: e.target.value })}
                        className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-3 py-2"
                        data-oid="azr11yp"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4" data-oid="d-:wajt">
                    <div data-oid="e2k9-vb">
                        <label
                            className="block text-sm font-medium text-gray-200"
                            data-oid="mav4l8x"
                        >
                            開始時間
                        </label>
                        <input
                            type="time"
                            value={flightPlan.startTime}
                            onChange={(e) =>
                                setFlightPlan({ ...flightPlan, startTime: e.target.value })
                            }
                            className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-3 py-2"
                            data-oid="8o6_5p-"
                        />
                    </div>
                    <div data-oid="_96lhca">
                        <label
                            className="block text-sm font-medium text-gray-200"
                            data-oid="xy-c97b"
                        >
                            終了時間
                        </label>
                        <input
                            type="time"
                            value={flightPlan.endTime}
                            onChange={(e) =>
                                setFlightPlan({ ...flightPlan, endTime: e.target.value })
                            }
                            className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-3 py-2"
                            data-oid="da9xeye"
                        />
                    </div>
                </div>
            </div>

            <div data-oid="q:e0ow-">
                <label className="block text-sm font-medium text-gray-200" data-oid="9napm83">
                    飛行目的
                </label>
                <textarea
                    value={flightPlan.purpose}
                    onChange={(e) => setFlightPlan({ ...flightPlan, purpose: e.target.value })}
                    rows={3}
                    className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-3 py-2"
                    data-oid="tn4iomu"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="a879-fg">
                <div data-oid="nfa:pj_">
                    <label className="block text-sm font-medium text-gray-200" data-oid="71izk-j">
                        機体モデル
                    </label>
                    <input
                        type="text"
                        value={flightPlan.droneModel}
                        onChange={(e) =>
                            setFlightPlan({ ...flightPlan, droneModel: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-3 py-2"
                        data-oid="xzrv1pg"
                    />
                </div>
                <div data-oid="dfy2mm3">
                    <label className="block text-sm font-medium text-gray-200" data-oid="i9x7ocj">
                        パイロット名
                    </label>
                    <input
                        type="text"
                        value={flightPlan.pilotName}
                        onChange={(e) =>
                            setFlightPlan({ ...flightPlan, pilotName: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-3 py-2"
                        data-oid="-5h3icd"
                    />
                </div>
            </div>

            <div className="flex justify-end" data-oid="gbqoi5i">
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                    data-oid="eltk581"
                >
                    申請する
                </button>
            </div>
        </form>
    );
}
