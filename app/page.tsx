'use client';

import { useState } from 'react';
import { CustomSelect } from '@boxpistols/react-map-vite';
import { Typography } from '@mui/material';

export default function Page() {
    const [activeTab, setActiveTab] = useState('flight');
    const [selectedColor, setSelectedColor] = useState('red');

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 
            relative
            "
            data-oid="hi3wvtz"
        >
            <nav
                className="bg-white/10 backdrop-blur-sm border-b border-white/10
                sticky top-0 w-full z-10
                "
                data-oid="0q4vcpj"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="i2sf29b">
                    <div className="flex items-center justify-between h-16" data-oid="hd9g2zf">
                        <div className="flex items-center" data-oid="3b9:w7.">
                            <div className="text-white font-bold text-2xl" data-oid="tbsw3s9">
                                DroneHub
                            </div>
                        </div>
                        <div className="flex space-x-4" data-oid="dkxhs5g">
                            <button
                                className="text-gray-300 hover:text-white px-3 py-2"
                                data-oid="1g72cr_"
                            >
                                ログイン
                            </button>
                            <button
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                                data-oid="xvg4sif"
                            >
                                新規登録
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="t8lv2sp">
                <div className="text-center mb-16" data-oid="jcvtzh3">
                    <h1 className="text-5xl font-bold text-white mb-4" data-oid="hh27f.j">
                        次世代ドローン管理プラットフォーム
                    </h1>
                    <p className="text-xl text-gray-400" data-oid="u2zb.24">
                        飛行許可申請から経路計画まで、すべてをシームレスに
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-oid="20rulmg">
                    <div
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500 transition-all"
                        data-oid="s0y4p:h"
                    >
                        <div
                            className="h-12 w-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center"
                            data-oid="43ebczi"
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="jn7fido"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    data-oid="x_tf_rb"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2" data-oid="_0i2z.-">
                            飛行許可申請
                        </h3>
                        <p className="text-gray-400" data-oid="x0_2vh8">
                            簡単な手順で飛行許可申請を完了。申請状況もリアルタイムで確認可能。
                        </p>
                    </div>

                    <div
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500 transition-all"
                        data-oid="gl92507"
                    >
                        <div
                            className="h-12 w-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center"
                            data-oid="3_zlqyu"
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="4b0.:0t"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    data-oid="w5g0q1i"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2" data-oid="2x_tct_">
                            機体管理
                        </h3>
                        <p className="text-gray-400" data-oid="sv5s:n0">
                            ドローン機体の詳細情報を一元管理。メンテナンス履歴も簡単に記録。
                        </p>
                    </div>

                    <div
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500 transition-all"
                        data-oid="x3t3yz1"
                    >
                        <div
                            className="h-12 w-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center"
                            data-oid="7xdfuqn"
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="b3sz5pg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                    data-oid="7vjyar0"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2" data-oid="oj---u6">
                            経路計画
                        </h3>
                        <p className="text-gray-400" data-oid="y4fue8r">
                            MapLibreを使用した高精度な飛行経路の設計と管理が可能。
                        </p>
                    </div>
                </div>
                <div
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
                    data-oid="p3hh1yg"
                >
                    <div className="flex space-x-4 mb-6" data-oid="qtaugmx">
                        <button
                            onClick={() => setActiveTab('flight')}
                            className={`px-4 py-2 rounded-lg ${activeTab === 'flight'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            data-oid="yudgx24"
                        >
                            飛行許可
                        </button>
                        <button
                            onClick={() => setActiveTab('manage')}
                            className={`px-4 py-2 rounded-lg ${activeTab === 'manage'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            data-oid="d4nqlxo"
                        >
                            機体管理
                        </button>
                        <button
                            onClick={() => setActiveTab('route')}
                            className={`px-4 py-2 rounded-lg ${activeTab === 'route'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            data-oid="k_3o:1o"
                        >
                            経路計画
                        </button>
                    </div>
                    <div
                        className="h-96 bg-white/5 rounded-lg border border-white/10 px-6 py-4"
                        data-oid="8gd7qu5"
                    >
                        {/* Placeholder for tab content */}
                        <div
                            className="flex flex-col -items-center -justify-center px-8 py-8 h-full"
                            data-oid="1.86st4"
                        >
                            <div
                                className="grid gap-4"
                            >
                                <Typography variant="xl" mb={2}>
                                    {activeTab === 'flight' && '飛行許可'}
                                    {activeTab === 'manage' && '機体管理'}
                                    {activeTab === 'route' && '経路計画'}
                                </Typography>

                                <Typography variant="xs" mb={2}>
                                    {activeTab === 'flight' && '簡単な手順で飛行許可申請を完了。申請状況もリアルタイムで確認可能。'}
                                    {activeTab === 'manage' && 'ドローン機体の詳細情報を一元管理。メンテナンス履歴も簡単に記録。'}
                                    {activeTab === 'route' && 'MapLibreを使用した高精度な飛行経路の設計と管理が可能。'}
                                </Typography>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="a879-fg"
                                >
                                    <CustomSelect
                                        label="色を選択"
                                        multiple
                                        options={[
                                            { label: '赤', value: 'red' },
                                            { label: '青', value: 'blue' },
                                            { label: '黄', value: 'yellow' },
                                        ]}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white/10 backdrop-blur-sm border-t border-white/10 mt-10
            sticky bottom-0 w-full z-10"
                data-oid="l2pup6r">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3" data-oid="x0vgsqd">
                    <div className="text-center text-gray-400" data-oid="qvnse58">
                        <p data-oid="qh50-8i">© 2024 DroneHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
